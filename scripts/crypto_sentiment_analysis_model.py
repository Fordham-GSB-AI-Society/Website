# scripts/crypto_sentiment_analysis_model.py
import os
from pathlib import Path
from datasets import load_dataset
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
import joblib

# --------------------------------------------------------------
# 1. Load dataset + SAMPLE 1% (≈780 examples)
# --------------------------------------------------------------
print("Loading dataset...")
dataset = load_dataset("ckandemir/bitcoin_tweets_sentiment_kaggle")

# Take only 1% of train (fast demo)
train = dataset["train"].shuffle(seed=42).select(range(1000))
test  = dataset["test"].shuffle(seed=42).select(range(100))

print(f"Using {len(train)} train / {len(test)} test examples")

X_train = [sample["text"] for sample in train]
y_train = [sample["Sentiment"] for sample in train]
X_test = [sample["text"] for sample in test]
y_test = [sample["Sentiment"] for sample in test]

# --------------------------------------------------------------
# 2. Vectorization (TF-IDF)
# --------------------------------------------------------------
vectorizer = TfidfVectorizer(
    stop_words="english",
    max_features=4096,
    ngram_range=(1, 2),
)

X_train_vec = vectorizer.fit_transform(X_train)
X_test_vec = vectorizer.transform(X_test)

# --------------------------------------------------------------
# 3. Label encoding
# --------------------------------------------------------------
STR_TO_LBL = {"Negative": 0, "Neutral": 1, "Positive": 2}
LBL_TO_STR = {0: "Bearish", 1: "Neutral", 2: "Bullish"}
y_train_enc = [STR_TO_LBL[y] for y in y_train]
y_test_enc = [STR_TO_LBL[y] for y in y_test]

# --------------------------------------------------------------
# 4. Simple ML model: Logistic Regression
# --------------------------------------------------------------
print("Training LogisticRegression...")
clf = LogisticRegression(max_iter=300, class_weight="balanced", random_state=42)
clf.fit(X_train_vec, y_train_enc)

# --------------------------------------------------------------
# 5. Evaluation
# --------------------------------------------------------------
y_pred = clf.predict(X_test_vec)
acc = accuracy_score(y_test_enc, y_pred)
print(f"Test accuracy: {acc:.3f}")

# --------------------------------------------------------------
# 6. Save model and vectorizer with joblib
# --------------------------------------------------------------
os.makedirs("./crypto_sentiment_model", exist_ok=True)
joblib.dump(clf, "./crypto_sentiment_model/logreg_model.joblib")
joblib.dump(vectorizer, "./crypto_sentiment_model/tfidf_vectorizer.joblib")

# --------------------------------------------------------------
# 7. Inference helper (writes Python helper script)
# --------------------------------------------------------------
predict_code = '''
import joblib

vectorizer = joblib.load("./crypto_sentiment_model/tfidf_vectorizer.joblib")
clf = joblib.load("./crypto_sentiment_model/logreg_model.joblib")
LBL_TO_STR = {0: "Bearish", 1: "Neutral", 2: "Bullish"}

def predict_sentiment(text: str) -> dict:
    X = vectorizer.transform([text])
    probs = clf.predict_proba(X)[0]
    label_id = int(probs.argmax())
    return {
        "label": LBL_TO_STR[label_id],
        "score": round(float(probs[label_id]), 4)
    }
'''

Path("./crypto_sentiment_model/predict_sentiment.py").write_text(predict_code)

print("\nDone in < 1 min!")
print("Model → ./crypto_sentiment_model/logreg_model.joblib")
print("Vectorizer → ./crypto_sentiment_model/tfidf_vectorizer.joblib")