# scripts/crypto_sentiment_analysis.py
import json
import sys
import random
from datetime import datetime, UTC, timedelta
import requests
from typing import List, Dict
from pathlib import Path

# --- Model loading ---
import os
import joblib

# --- Reddit & env ---
import praw
from dotenv import load_dotenv

load_dotenv()

# --- Hardcoded label mapping ---
LBL_TO_STR = {0: "Bearish", 1: "Neutral", 2: "Bullish"}

MODEL_DIR = "./crypto_sentiment_model"
VEC_PATH = os.path.join(MODEL_DIR, "tfidf_vectorizer.joblib")
CLF_PATH = os.path.join(MODEL_DIR, "logreg_model.joblib")

def model_not_found_error(e):
    print(json.dumps([{
        "error": "Model not loaded",
        "details": "Run `python crypto_sentiment_analysis_model.py` first to train and export the model.",
        "trace": str(e)
    }]))
    sys.exit(1)

try:
    vectorizer = joblib.load(VEC_PATH)
    clf = joblib.load(CLF_PATH)
except Exception as e:
    model_not_found_error(e)

# --- Reddit API (User-less) ---
REDDIT_CLIENT_ID = os.getenv("REDDIT_CLIENT_ID")
REDDIT_CLIENT_SECRET = os.getenv("REDDIT_CLIENT_SECRET")
REDDIT_USER_AGENT = os.getenv("REDDIT_USER_AGENT")

if not all([REDDIT_CLIENT_ID, REDDIT_CLIENT_SECRET, REDDIT_USER_AGENT]):
    print(json.dumps([{"error": "Reddit API credentials missing in .env"}]), file=sys.stderr)
    sys.exit(1)

reddit = praw.Reddit(
    client_id=REDDIT_CLIENT_ID,
    client_secret=REDDIT_CLIENT_SECRET,
    user_agent=REDDIT_USER_AGENT
)

# --- FILE-BASED CACHE (Option 1) ---
CACHE_DIR = Path("./cache")
CACHE_FILE = CACHE_DIR / "crypto_sentiment.json"
CACHE_TTL_SECONDS = 60  # 1 minute

def load_cache() -> list | None:
    if not CACHE_FILE.exists():
        return None
    try:
        data = json.loads(CACHE_FILE.read_text(encoding="utf-8"))
        cached_time = datetime.fromisoformat(data["timestamp"])
        if datetime.now(UTC) - cached_time < timedelta(seconds=CACHE_TTL_SECONDS):
            return data["results"]
    except Exception as e:
        pass
    return None

def save_cache(results: list) -> None:
    try:
        CACHE_DIR.mkdir(parents=True, exist_ok=True)
        CACHE_FILE.write_text(
            json.dumps({
                "timestamp": datetime.now(UTC).isoformat(),
                "results": results
            }, ensure_ascii=False),
            encoding="utf-8"
        )
    except Exception as e:
        pass

# --- Rest of your functions unchanged ---
def predict_sentiment(text: str) -> dict:
    try:
        X = vectorizer.transform([text])
        probs = clf.predict_proba(X)[0]
        label_id = int(probs.argmax())
        return {
            "label": LBL_TO_STR[label_id],
            "score": round(float(probs[label_id]), 4)
        }
    except Exception as e:
        return {"error": "Model prediction error", "details": str(e)}

COINGECKO_IDS = {
    "BTC": "bitcoin", "ETH": "ethereum", "SOL": "solana",
    "XRP": "ripple", "ADA": "cardano", "DOT": "polkadot"
}

HEADERS = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"}

def fetch_price_data() -> Dict[str, Dict]:
    ids = ",".join(COINGECKO_IDS.values())
    url = f"https://api.coingecko.com/api/v3/simple/price?ids={ids}&vs_currencies=usd&include_24hr_change=true"
    try:
        res = requests.get(url, headers=HEADERS, timeout=10)
        res.raise_for_status()
        return res.json()
    except Exception as e:
        return {}

def fetch_reddit_comments(symbol: str, name: str, limit: int = 20) -> List[str]:
    query = f'("{name}" OR ${symbol})'
    subreddits_to_search = "cryptocurrency+bitcoin+ethtrader+solana+cardano+ripple"
    comments = []
    try:
        submissions = reddit.subreddit(subreddits_to_search).search(query, sort="new", time_filter="week", limit=10)
        for submission in submissions:
            if submission.score < 3:
                continue
            submission.comments.replace_more(limit=0)
            for comment in submission.comments.list()[:5]:
                if len(comments) < limit:
                    comments.append(comment.body)
                else:
                    break
            if len(comments) >= limit:
                break

        if not comments:
            return [f"No recent high-quality discussion found for {name}."]
        return comments
    except Exception as e:
        return [f"Discussion about {name} (${symbol}) is ongoing."]

def aggregate_sentiment(texts: List[str]) -> Dict:
    if not texts:
        return {"label": "Neutral", "score": 0.5}
    results = [predict_sentiment(text) for text in texts]
    valid = [r for r in results if "error" not in r]
    if not valid:
        return {"label": "Neutral", "score": 0.5}
    bull = neu = bear = total_weight = 0.0
    for r in valid:
        weight = r["score"]
        total_weight += weight
        if r["label"] == "Bullish": bull += weight
        elif r["label"] == "Neutral": neu += weight
        elif r["label"] == "Bearish": bear += weight
    if total_weight == 0:
        return {"label": "Neutral", "score": 0.5}
    bull_pct, neu_pct, bear_pct = bull / total_weight, neu / total_weight, bear / total_weight
    scores, labels = [bear_pct, neu_pct, bull_pct], ["Bearish", "Neutral", "Bullish"]
    max_idx = scores.index(max(scores))
    return {
        "label": labels[max_idx],
        "score": round(scores[max_idx], 4),
        "breakdown": {"Bearish": round(bear_pct, 4), "Neutral": round(neu_pct, 4), "Bullish": round(bull_pct, 4)}
    }

def get_technical_signal(change_24h: float) -> str:
    if change_24h > 5: return "Strong Buy"
    elif change_24h > 1: return "Buy"
    elif change_24h < -5: return "Strong Sell"
    elif change_24h < -1: return "Sell"
    else: return "Hold"

def get_social_signal(sentiment_label: str) -> str:
    return {"Bullish": "Very Positive", "Bearish": "Very Negative", "Neutral": "Mixed"}.get(sentiment_label, "Mixed")

def generate_prediction(name: str, sentiment: str, change: float) -> str:
    templates = {
        "Bullish": [f"{name} showing strong upward momentum.", f"Community confidence in {name} is high."],
        "Bearish": [f"{name} under pressure.", f"Caution advised."],
        "Neutral": [f"{name} consolidating.", f"Market awaiting catalyst."]
    }
    return random.choice(templates.get(sentiment, templates["Neutral"]))

# --- MAIN with proper file cache ---
def main():
    # 1. Try to load from cache first
    cached_results = load_cache()
    if cached_results is not None:
        print(json.dumps(cached_results))
        return

    results = []
    price_data = fetch_price_data()

    for symbol, name in [("BTC", "Bitcoin"), ("ETH", "Ethereum"), ("SOL", "Solana"),
                        ("XRP", "Ripple"), ("ADA", "Cardano"), ("DOT", "Polkadot")]:
        cg_id = COINGECKO_IDS[symbol]
        price_info = price_data.get(cg_id, {})
        price = price_info.get("usd", 0)
        change = price_info.get("usd_24h_change", 0)
        reddit_comments = fetch_reddit_comments(symbol, name, limit=20)
        sentiment = aggregate_sentiment(reddit_comments)

        result = {
            "name": name,
            "symbol": symbol,
            "price": f"${price:,.2f}" if price else "N/A",
            "change": f"{'+' if change >= 0 else ''}{change:.2f}%" if change else "N/A",
            "sentiment": sentiment["label"],
            "confidence": int(sentiment["score"] * 100),
            "signals": {
                "technical": get_technical_signal(change),
                "social": get_social_signal(sentiment["label"]),
                "news": "Neutral"
            },
            "prediction": generate_prediction(name, sentiment["label"], change),
            "timestamp": datetime.now(UTC).isoformat(),
            "data_sources": ["CoinGecko", "Reddit (Official API)"]
        }
        results.append(result)

    # 2. Save fresh results to cache
    save_cache(results)

    # 3. Output
    print(json.dumps(results))

if __name__ == "__main__":
    main()