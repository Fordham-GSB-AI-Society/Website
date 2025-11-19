# app/api/crypto-sentiment/route.py
import json
import os
import sys
from pathlib import Path

# Add your project root to Python path
ROOT = Path(__file__).resolve().parents[2]
sys.path.append(str(ROOT))

def application(environ, start_response):
    try:
        # Import your script
        from scripts.crypto_sentiment_analysis import main

        # Capture the JSON output
        import io
        output = io.StringIO()
        import contextlib
        with contextlib.redirect_stdout(output):
            main()  # This prints JSON directly
        json_output = output.getvalue()

        start_response("200 OK", [
            ("Content-Type", "application/json"),
            ("Cache-Control", "s-maxage=300, stale-while-revalidate=60")
        ])
        return [json_output.encode("utf-8")]

    except Exception as e:
        # This helps you debug — check Vercel logs!
        error_msg = json.dumps({
            "error": "Python script failed",
            "details": str(e),
            "path": str(ROOT),
            "files": os.listdir(ROOT / "crypto_sentiment_model") if (ROOT / "crypto_sentiment_model").exists() else "missing"
        })
        start_response("500 Internal Server Error", [("Content-Type", "application/json")])
        return [error_msg.encode("utf-8")]