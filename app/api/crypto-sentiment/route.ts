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

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const useFallback = searchParams.get('fallback');
  
  if (useFallback === 'true') {
    return NextResponse.json(FALLBACK_DATA);
  }

  try {
    const result = await executePythonScript();
    return NextResponse.json(result);
  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(FALLBACK_DATA);
  }
}

async function executePythonScript(): Promise<any[]> {
  return new Promise((resolve) => {
    console.log('Executing Python script:', PYTHON_SCRIPT);
    
    const python = spawn('python', [PYTHON_SCRIPT], {
      cwd: process.cwd(), // Set current working directory
    });

    let data = '';
    let errorOutput = '';
    let resolved = false;

    const timeout = setTimeout(() => {
      if (!resolved) {
        resolved = true;
        python.kill('SIGTERM');
        console.warn('Python script timeout - using fallback data');
        resolve(FALLBACK_DATA);
      }
    }, TIMEOUT_MS);

    const resolveSafely = (result: any[]) => {
      if (!resolved) {
        resolved = true;
        clearTimeout(timeout);
        resolve(result);
      }
    };

    python.stdout.on('data', (chunk) => {
      data += chunk.toString();
      console.log('Python stdout:', chunk.toString());
    });

    python.stderr.on('data', (chunk) => {
      errorOutput += chunk.toString();
      console.error('Python stderr:', chunk.toString());
    });

    python.on('close', (code) => {
      if (resolved) return;

      console.log(`Python process closed with code: ${code}`);
      console.log('Python output data:', data);
      console.log('Python error output:', errorOutput);

      if (code === 0 && data) {
        try {
          const parsedData = JSON.parse(data.trim());
          if (Array.isArray(parsedData) && parsedData.length > 0) {
            console.log('Python script executed successfully');
            resolveSafely(parsedData);
          } else {
            console.warn('Python script returned empty array, using fallback');
            resolveSafely(FALLBACK_DATA);
          }
        } catch (parseError) {
          console.error('Failed to parse Python script output:', parseError);
          resolveSafely(FALLBACK_DATA);
        }
      } else {
        console.error(`Python script failed with code ${code}:`, errorOutput);
        resolveSafely(FALLBACK_DATA);
      }
    });

    python.on('error', (error) => {
      console.error('Python process error:', error);
      resolveSafely(FALLBACK_DATA);
    });
  });
}

export const dynamic = 'force-dynamic';