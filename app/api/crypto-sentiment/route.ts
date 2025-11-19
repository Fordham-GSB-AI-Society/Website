// app/api/crypto-sentiment/route.ts
import { NextResponse } from 'next/server';
import { spawn } from 'child_process';
import path from 'path';

// Correct path to Python script - adjust based on your actual structure
const PYTHON_SCRIPT = path.join(process.cwd(), 'scripts', 'crypto_sentiment_analysis.py');
const TIMEOUT_MS = 30000; // 30 seconds

// Fallback data
const FALLBACK_DATA = [
  {
    coin: "Bitcoin",
    price: 43210.5,
    change_24h: 2.3,
    sentiment: "Bullish",
    confidence: 0.78,
    timestamp: new Date().toISOString()
  },
  {
    coin: "Ethereum",
    price: 2270.1,
    change_24h: -1.2,
    sentiment: "Neutral",
    confidence: 0.55,
    timestamp: new Date().toISOString()
  },
  {
    coin: "Solana",
    price: 98.4,
    change_24h: 5.7,
    sentiment: "Bullish",
    confidence: 0.82,
    timestamp: new Date().toISOString()
  }
];

export const GET = async () => {
  try {
    const result = await executePythonScript();
    return NextResponse.json(result);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(FALLBACK_DATA, { status: 200 });
  }
};

async function executePythonScript(): Promise<any[]> {
  return new Promise((resolve) => {
    console.log('Spawning Python script:', PYTHON_SCRIPT);

    // THIS LINE FIXES VERCEL
    const pythonCmd = process.env.VERCEL ? 'python3' : 'python';

    const python = spawn(pythonCmd, [PYTHON_SCRIPT], {
      cwd: process.cwd(),
      timeout: TIMEOUT_MS,
    });

    let data = '';
    let error = '';

    const timeout = setTimeout(() => {
      python.kill();
      resolve(FALLBACK_DATA);
    }, TIMEOUT_MS);

    python.stdout.on('data', (chunk) => data += chunk.toString());
    python.stderr.on('data', (chunk) => error += chunk.toString());

    python.on('close', (code) => {
      clearTimeout(timeout);
      if (code === 0 && data.trim()) {
        try {
          const parsed = JSON.parse(data.trim());
          if (Array.isArray(parsed) && parsed.length > 0) {
            resolve(parsed);
            return;
          }
        } catch (e) { /* fall through */ }
      }
      console.error('Python failed:', { code, error });
      resolve(FALLBACK_DATA);
    });

    python.on('error', (err) => {
      console.error('Spawn error:', err);
      clearTimeout(timeout);
      resolve(FALLBACK_DATA);
    });
  });
}

export const dynamic = 'force-dynamic';
export const maxDuration = 60;