import { NextResponse } from "next/server";
import { execFile } from "child_process";
import path from "path";

export async function GET() {
  const script = path.join(process.cwd(), "scripts", "crypto_sentiment_analysis.py");

  try {
    const data = await new Promise<string>((resolve, reject) => {
      execFile("python3", [script], (err, stdout, stderr) => {
        if (err) reject(err);
        else resolve(stdout);
      });
    });

    const parsed = JSON.parse(data);

    // Ensure FE requirements
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

    return NextResponse.json(formatted, {
      headers: {
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600",
      },
    });

  } catch (err: any) {
    return NextResponse.json([], { status: 200 });
  }
}
