# app/api/crypto-sentiment/route.py
import json
import sys
from pathlib import Path
import io
import contextlib

# Add project root to path
sys.path.insert(0, str(Path(__file__).parent.parent.parent))

try:
    from scripts.crypto_sentiment_analysis import main
except ImportError as e:
    # Fallback to empty array if import fails
    print(json.dumps([]))
    sys.exit(0)

def application(environ, start_response):
    # Capture output from main()
    output = io.StringIO()
    with contextlib.redirect_stdout(output):
        main()
    result = output.getvalue().strip()

    # Parse and reformat to match frontend (name/symbol instead of coin, etc.)
    if result:
        try:
            raw_data = json.loads(result)
            # Map keys to expected format
            formatted = []
            for item in raw_data:
                formatted.append({
                    "name": item.get("name", item.get("coin", "Unknown")),
                    "symbol": item.get("symbol", ""),
                    "price": item.get("price", "N/A"),
                    "change": item.get("change", item.get("change_24h", "N/A")),
                    "sentiment": item.get("sentiment", "Neutral"),
                    "confidence": item.get("confidence", 50),
                    "signals": item.get("signals", {}),
                    "prediction": item.get("prediction", ""),
                    "timestamp": item.get("timestamp", ""),
                    "data_sources": item.get("data_sources", [])
                })
            result = json.dumps(formatted)
        except:
            pass  # Keep original if parse fails

    if not result:
        result = json.dumps([])

    start_response("200 OK", [
        ("Content-Type", "application/json; charset=utf-8"),
        ("Cache-Control", "s-maxage=300, stale-while-revalidate=600")
    ])
    return [result.encode("utf-8")]