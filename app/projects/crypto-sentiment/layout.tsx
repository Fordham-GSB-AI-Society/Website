// app/projects/crypto-sentiment/layout.tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Crypto Sentiment Analyzer | Fordham AI Club",
  description:
    "AI-powered cryptocurrency sentiment analysis predicting bullish/bearish trends for popular cryptocurrencies",
}

export default function CryptoSentimentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}