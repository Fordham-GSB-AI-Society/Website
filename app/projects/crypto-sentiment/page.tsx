// app/projects/crypto-sentiment/page.tsx
'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, TrendingUp, TrendingDown, Minus, Github, ExternalLink, RefreshCw } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

// Define a type for our crypto data for better type safety
interface CryptoData {
  name: string;
  symbol: string;
  price: string;
  change: string;
  sentiment: string;
  confidence: number;
  signals: {
    technical: string;
    social: string;
    news: string;
  };
  prediction: string;
}

// ----- MOCK DATA (shows instantly) -----
const MOCK_DATA: CryptoData[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: "$43,210.50",
    change: "+2.3%",
    sentiment: "Bullish",
    confidence: 78,
    signals: { technical: "Strong Buy", social: "Very Positive", news: "Bullish" },
    prediction: "High confidence in upward momentum driven by strong social sentiment and technical indicators."
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: "$2,270.10",
    change: "-1.2%",
    sentiment: "Neutral",
    confidence: 55,
    signals: { technical: "Hold", social: "Mixed", news: "Neutral" },
    prediction: "Balanced signals suggest sideways movement in the near term."
  },
  {
    name: "Solana",
    symbol: "SOL",
    price: "$98.40",
    change: "+5.7%",
    sentiment: "Bullish",
    confidence: 82,
    signals: { technical: "Buy", social: "Very Positive", news: "Positive" },
    prediction: "Strong momentum with high confidence in continued growth."
  }
]

const getCardBorderColor = (sentiment: string) => {
    if (sentiment === "Bullish") return "border-green-500/50 bg-green-500/5"
    if (sentiment === "Bearish") return "border-red-500/50 bg-red-500/5"
    return "border-yellow-500/50 bg-yellow-500/5"
  }
  
export default function CryptoSentimentPage() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState("")

  const fetchData = async () => {
    setLoading(true)
    setError(null)
    try {
      const controller = new AbortController()
      const timeout = setTimeout(() => controller.abort(), 50000) // 5s max

      const res = await fetch('/api/crypto-sentiment', { signal: controller.signal })
      clearTimeout(timeout)

      if (!res.ok) throw new Error(`API request failed with status ${res.status}`)

      const data = await res.json()

      // --- FIX: Add data validation ---
      // Filter out any items that don't have the essential properties
      const validData = Array.isArray(data) ? data.filter(item =>
        item &&
        typeof item.name === 'string' &&
        typeof item.symbol === 'string' &&
        typeof item.price === 'string' &&
        typeof item.change === 'string' &&
        typeof item.sentiment === 'string' &&
        typeof item.confidence === 'number' &&
        item.signals &&
        typeof item.prediction === 'string'
      ) : []

      if (validData.length > 0) {
        setCryptoData(validData)
      } else {
        throw new Error("API returned invalid or empty data")
      }
      setLastUpdate(new Date().toLocaleTimeString())
    } catch (err: any) {
      console.error("API failed:", err)
      setError(err.name === 'AbortError' ? "Request timed out. Using demo data." : "Failed to fetch live data. Using demo data.")
      setCryptoData(MOCK_DATA) // ← FALLBACK
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const interval = setInterval(fetchData, 60000)
    return () => clearInterval(interval)
  }, [])

  const getSentimentIcon = (sentiment: string = "Neutral") => {
    if (sentiment === "Bullish") return <TrendingUp className="h-5 w-5 text-green-500" />
    if (sentiment === "Bearish") return <TrendingDown className="h-5 w-5 text-red-500" />
    return <Minus className="h-5 w-5 text-yellow-500" />
  }

  const getSentimentColor = (sentiment: string = "Neutral") => {
    if (sentiment === "Bullish") return "text-green-500 bg-green-500/10 border-green-500/20"
    if (sentiment === "Bearish") return "text-red-500 bg-red-500/10 border-red-500/20"
    return "text-yellow-500 bg-yellow-500/10 border-yellow-500/20"
  }

  const getSignalColor = (signal: string = "Hold") => {
    if (signal.includes("Buy") || signal.includes("Positive") || signal.includes("Bullish"))
      return "bg-green-500/20 text-green-400"
    if (signal.includes("Sell") || signal.includes("Negative") || signal.includes("Bearish"))
      return "bg-red-500/20 text-red-400"
    return "bg-yellow-500/20 text-yellow-400"
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Button variant="ghost" className="gap-2 transition-all duration-300 hover:scale-105">
                <ArrowLeft className="h-4 w-4" /> Back to Home
              </Button>
            </Link>
            <div className="flex gap-2 items-center">
              <Button
                size="sm"
                variant="outline"
                onClick={fetchData}
                disabled={loading}
                className="gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4">AI Research Project</Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Cryptocurrency Sentiment Analyzer</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            AI-powered real-time analysis predicting bullish or bearish trends.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Python", "CoinGecko API", "Reddit API"].map(t => (
              <span key={t} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-md">
                {t}
              </span>
            ))}
          </div>
          {lastUpdate && !error && <p className="text-sm text-muted-foreground mt-4">Last updated: {lastUpdate}</p>}
        </div>
      </section>

      {/* Live Predictions */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Live Sentiment Predictions</h2>
              {loading ? (
                <p className="text-muted-foreground flex items-center justify-center gap-2">
                  <RefreshCw className="h-5 w-5 animate-spin" /> Loading live data...
                </p>
              ) : error ? (
                <p className="text-yellow-500">{error} — <button onClick={fetchData} className="underline">Retry</button></p>
              ) : (
                <p className="text-muted-foreground">Real-time AI predictions updated every minute</p>
              )}
            </div>

            <div className="grid gap-6">
              {cryptoData.map((crypto, i) => (
                 <Card key={i} className={`transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border-2 ${getCardBorderColor(crypto.sentiment)}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl font-bold">
                          {/* --- FIX: Defensive rendering with fallback --- */}
                          {crypto.symbol?.charAt(0) || '?'}
                        </div>
                        <div>
                          <CardTitle className="text-2xl flex items-center gap-2">
                            {crypto.name || 'Unknown Coin'}
                            <span className="text-muted-foreground text-lg font-normal">{crypto.symbol || 'N/A'}</span>
                          </CardTitle>
                          <div className="flex items-center gap-3 mt-1">
                            <span className="text-2xl font-semibold">{crypto.price || '$0.00'}</span>
                            <span className={`text-sm font-medium ${(crypto.change || '+0%').startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                              {crypto.change || '0.00%'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={`mb-2 ${getSentimentColor(crypto.sentiment)} border flex items-center gap-1 w-fit ml-auto`}>
                          {getSentimentIcon(crypto.sentiment)}
                          {crypto.sentiment || 'Neutral'}
                        </Badge>
                        <div className="text-sm text-muted-foreground">
                          Confidence: <span className="font-semibold">{crypto.confidence || 0}%</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      {["technical", "social", "news"].map((key) => (
                        <div key={key} className="space-y-1">
                          <div className="text-sm text-muted-foreground capitalize">{key} Signal</div>
                           {/* --- FIX: Defensive rendering for nested properties --- */}
                          <Badge className={`${getSignalColor(crypto.signals?.[key as keyof typeof crypto.signals])} border-0`}>
                            {crypto.signals?.[key as keyof typeof crypto.signals] || 'N/A'}
                          </Badge>
                        </div>
                      ))}
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="text-sm font-medium mb-2">AI Analysis</div>
                      <p className="text-sm text-muted-foreground">{crypto.prediction || 'No analysis available.'}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Keep your other sections (How It Works, etc.) */}
    </div>
  )
}