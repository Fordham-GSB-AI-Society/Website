import json
from scripts.crypto_sentiment_analysis import main

def handler(request):
    try:
        raw = main()

        formatted = []
        for item in raw:
            formatted.append({
                "name": item.get("name", item.get("coin", "Unknown")),
                "symbol": item.get("symbol", ""),
                "price": str(item.get("price", "N/A")),
                "change": str(item.get("change", item.get("change_24h", "N/A"))),
                "sentiment": item.get("sentiment", "Neutral"),
                "confidence": float(item.get("confidence", 50)),
                "signals": item.get("signals", {}),
                "prediction": item.get("prediction", "")
            })

        return {
            "statusCode": 200,
            "headers": {
                "Content-Type": "application/json"
            },
            "body": json.dumps(formatted)
        }

    except Exception as e:
        return { "statusCode": 200, "body": "[]" }
