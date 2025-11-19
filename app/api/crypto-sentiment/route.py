# app/api/crypto-sentiment/route.py
import json
import sys
from pathlib import Path

# Add project root to path
sys.path.append(str(Path(__file__).resolve().parents[2]))

from scripts.crypto_sentiment_analysis import main

def handler(event, context=None):
    # Capture output from your script
    import io, contextlib
    output = io.StringIO()
    with contextlib.redirect_stdout(output):
        main()
    result = output.getvalue()

    return {
        "statusCode": 200,
        "headers": {"Content-Type": "application/json"},
        "body": result
    }