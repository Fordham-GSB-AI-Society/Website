import { NextResponse } from "next/server";
import { execFile } from "child_process";
import path from "path";

export const runtime = "nodejs";

// Helper to run Python script and parse JSON
const runPythonScript = async (scriptPath: string) => {
  return new Promise<any[]>((resolve, reject) => {
    execFile("python3", [scriptPath], (err, stdout, stderr) => {
      if (err) {
        console.error("Python execution error:", err, stderr);
        return reject(err);
      }
      try {
        const parsed = JSON.parse(stdout);
        resolve(parsed);
      } catch (parseErr) {
        reject(parseErr);
      }
    });
  });
};

export async function GET() {
  try {
    const isLocal = process.env.NODE_ENV === "development" && !process.env.VERCEL_URL;

    if (isLocal) {
      // 🟩 LOCAL DEVELOPMENT — run Python script directly
      const localScriptPath = path.join(process.cwd(), "scripts/crypto_sentiment_analysis.py");
      const data = await runPythonScript(localScriptPath);

      const formatted = data.map((item: any) => ({
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
    } else {
      // 🟦 PRODUCTION / VERCEL — run Python script inside serverless environment
      // Relative path to script inside deployment
      const prodScriptPath = path.join(__dirname, "../../../scripts/crypto_sentiment_analysis.py");
      const data = await runPythonScript(prodScriptPath);

      const formatted = data.map((item: any) => ({
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
  } catch (err) {
    console.error("API ERROR:", err);
    return NextResponse.json([], { status: 500 });
  }
}
