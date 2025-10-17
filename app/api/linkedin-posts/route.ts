import { NextResponse } from "next/server"

// LinkedIn API configuration
const LINKEDIN_API_BASE = "https://api.linkedin.com/v2"
const LINKEDIN_ACCESS_TOKEN = process.env.LINKEDIN_ACCESS_TOKEN
const LINKEDIN_ORG_ID = process.env.LINKEDIN_ORG_ID

interface LinkedInPost {
  id: string
  author: string
  created: {
    time: number
  }
  text: {
    text: string
  }
  content?: {
    media?: {
      url: string
    }
  }
  socialDetail?: {
    totalShareStatistics: {
      likeCount: number
      commentCount: number
      shareCount: number
    }
  }
}

export async function GET() {
  console.log("[v0] LinkedIn API route called")
  console.log("[v0] Environment check:", {
    hasToken: !!LINKEDIN_ACCESS_TOKEN,
    hasOrgId: !!LINKEDIN_ORG_ID,
  })

  try {
    // Check if credentials are configured
    if (!LINKEDIN_ACCESS_TOKEN || !LINKEDIN_ORG_ID) {
      console.log("[v0] LinkedIn credentials not configured")
      return NextResponse.json(
        {
          error: "LinkedIn API not configured",
          message: "Please add LINKEDIN_ACCESS_TOKEN and LINKEDIN_ORG_ID to your environment variables",
          posts: getFallbackPosts(),
        },
        { status: 200 },
      )
    }

    // Fetch organization posts from LinkedIn API
    const response = await fetch(
      `${LINKEDIN_API_BASE}/ugcPosts?q=authors&authors=List(urn:li:organization:${LINKEDIN_ORG_ID})&count=10&sortBy=LAST_MODIFIED`,
      {
        headers: {
          Authorization: `Bearer ${LINKEDIN_ACCESS_TOKEN}`,
          "X-Restli-Protocol-Version": "2.0.0",
          "LinkedIn-Version": "202401",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    )

    if (!response.ok) {
      console.log("[v0] LinkedIn API error:", response.status, response.statusText)
      throw new Error(`LinkedIn API error: ${response.status}`)
    }

    const data = await response.json()
    console.log("[v0] Successfully fetched LinkedIn posts:", data.elements?.length || 0)

    // Transform LinkedIn API response to our format
    const posts =
      data.elements?.map((post: LinkedInPost) => ({
        author: "Fordham AI Club",
        date: formatDate(post.created.time),
        content: post.text?.text || "",
        image: post.content?.media?.url || null,
        likes: post.socialDetail?.totalShareStatistics?.likeCount || 0,
        comments: post.socialDetail?.totalShareStatistics?.commentCount || 0,
        shares: post.socialDetail?.totalShareStatistics?.shareCount || 0,
        link: `https://www.linkedin.com/feed/update/${post.id}`,
      })) || []

    return NextResponse.json({ posts: posts.slice(0, 3) })
  } catch (error) {
    console.error("[v0] Error fetching LinkedIn posts:", error)

    // Return fallback posts on error
    return NextResponse.json(
      {
        error: "Failed to fetch LinkedIn posts",
        posts: getFallbackPosts(),
      },
      { status: 200 },
    )
  }
}

function formatDate(timestamp: number): string {
  const now = Date.now()
  const diff = now - timestamp
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (days === 0) return "Today"
  if (days === 1) return "1 day ago"
  if (days < 7) return `${days} days ago`
  if (days < 14) return "1 week ago"
  if (days < 30) return `${Math.floor(days / 7)} weeks ago`
  return `${Math.floor(days / 30)} months ago`
}

function getFallbackPosts() {
  return [
    {
      author: "Fordham AI Club",
      date: "2 days ago",
      content:
        "Excited to announce our upcoming AI Hackathon in partnership with QLaws.ai! Join us for 4 hours of innovation, collaboration, and the chance to work on real-world legal AI challenges. Top performers will have the opportunity to interview for internships and full-time roles.",
      image: "/ai-hackathon-event-poster.jpg",
      likes: 127,
      comments: 23,
      shares: 15,
      link: "https://linkedin.com/company/fordham-ai-club",
    },
    {
      author: "Fordham AI Club",
      date: "1 week ago",
      content:
        "Our members recently presented their research on Natural Language Processing at the Northeast AI Conference. Proud of the innovative work being done by our community in advancing AI applications in legal tech and healthcare.",
      image: "/ai-conference-presentation.jpg",
      likes: 89,
      comments: 12,
      shares: 8,
      link: "https://linkedin.com/company/fordham-ai-club",
    },
    {
      author: "Fordham AI Club",
      date: "2 weeks ago",
      content:
        "Join us for AIcebreaker - our monthly networking happy hour at The Blessed Kitchen! Connect with fellow AI enthusiasts, discuss the latest trends in machine learning, and enjoy complimentary drinks for the first 30 attendees. See you there!",
      image: "/networking-event-happy-hour.jpg",
      likes: 156,
      comments: 34,
      shares: 22,
      link: "https://linkedin.com/company/fordham-ai-club",
    },
  ]
}
