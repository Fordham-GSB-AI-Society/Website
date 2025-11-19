import { NextResponse } from "next/server";
import { execFile } from "child_process";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  try {
    const isLocal = process.env.NODE_ENV === "development" && !process.env.VERCEL_URL;

    if (isLocal) {
      // 🟩 LOCAL DEVELOPMENT: run Python script directly
      const script = path.join(process.cwd(), "scripts", "crypto_sentiment_analysis.py");

      const data = await new Promise<string>((resolve, reject) => {
        execFile("python3", [script], (err, stdout, stderr) => {
          if (err) return reject(err);
          resolve(stdout);
        });
      });

      const parsed = JSON.parse(data);

      const formatted = parsed.map((item: any) => ({
        name: item.name || item.coin || "Unknown",
        symbol: item.symbol ?? "",
        price: String(item.price ?? "N/A"),
        change: String(item.change_24h ?? item.change ?? "N/A"),
        sentiment: item.sentiment ?? "Neutral",
        confidence: Number(item.confidence ?? 50),
        signals: item.signals ?? {},
        prediction: item.prediction ?? "",
      }));

      return NextResponse.json(formatted);
    }

    // 🟦 PRODUCTION (Vercel): fetch from Python serverless function
    // You must create a separate Python function at /api/crypto-sentiment-pyth
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    console.log(`${baseUrl}`)
    const res = await fetch(`${baseUrl}/app/api/crypto-sentiment-pyth`, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Python API error: ${res.status}`);

    const parsed = await res.json();

    // Validate data and fallback if empty
    const formatted = Array.isArray(parsed)
      ? parsed.filter(
          (item) =>
            item &&
            typeof item.name === "string" &&
            typeof item.symbol === "string" &&
            typeof item.price === "string" &&
            typeof item.change === "string" &&
            typeof item.sentiment === "string" &&
            typeof item.confidence === "number" &&
            item.signals &&
            typeof item.prediction === "string"
        )
      : [];

    if (formatted.length === 0) throw new Error("Python API returned invalid or empty data");

    return NextResponse.json(formatted);

  } catch (err: any) {
    console.error("API ERROR:", err);

    // Fallback: return mock/demo data
    const MOCK_DATA = [
      {
        name: "Bitcoin",
        symbol: "BTC",
        price: "$43,210.50",
        change: "+2.3%",
        sentiment: "Bullish",
        confidence: 78,
        signals: { technical: "Strong Buy", social: "Very Positive", news: "Bullish" },
        prediction:
          "High confidence in upward momentum driven by strong social sentiment and technical indicators.",
      },
      {
        name: "Ethereum",
        symbol: "ETH",
        price: "$2,270.10",
        change: "-1.2%",
        sentiment: "Neutral",
        confidence: 55,
        signals: { technical: "Hold", social: "Mixed", news: "Neutral" },
        prediction: "Balanced signals suggest sideways movement in the near term.",
      },
    ];

    return NextResponse.json(MOCK_DATA, { status: 404});
  }
}
