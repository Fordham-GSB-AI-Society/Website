# app/api/crypto-sentiment/route.py
import json
import sys
from pathlib import Path
import io
import contextlib

# Add project root to path for imports
sys.path.insert(0, str(Path(__file__).parent.parent.parent))

try:
    from scripts.crypto_sentiment_analysis import main
except ImportError as e:
    # If import fails, return error JSON
    response = json.dumps([{"error": "Script import failed", "details": str(e)}])
    print(response)
    sys.exit(0)

def application(environ, start_response):
    # Capture output from main()
    output = io.StringIO()
    with contextlib.redirect_stdout(output):
        main()
    result = output.getvalue().strip()

    # If empty, return empty array
    if not result:
        result = json.dumps([])

    start_response("200 OK", [
        ("Content-Type", "application/json; charset=utf-8"),
        ("Cache-Control", "s-maxage=300, stale-while-revalidate=600")
    ])
    return [result.encode("utf-8")]