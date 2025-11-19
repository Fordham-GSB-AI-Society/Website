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

