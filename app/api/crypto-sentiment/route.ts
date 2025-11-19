import { NextResponse } from "next/server";
import { execFile } from "child_process";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  try {
    // Detect if running locally
    const isLocal =
      !process.env.VERCEL_URL &&
      (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "local");

    if (isLocal) {
      // 🟩 LOCAL MODE — run Python directly
      const script = path.join(process.cwd(), "scripts", "crypto_sentiment_analysis.py");

      const data = await new Promise<string>((resolve, reject) => {
        execFile("python3", [script], (err, stdout) => {
          if (err) reject(err);
          else resolve(stdout);
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

    // 🟦 VERCEL MODE — call Python serverless function
    const baseUrl = `https://${process.env.VERCEL_URL}`;
    const res = await fetch(`${baseUrl}/api/crypto-sentiment`, {
      cache: "no-store",
    });

    const parsed = await res.json();

    return NextResponse.json(parsed);

  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json([], { status: 200 });
  }
}
