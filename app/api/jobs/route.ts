import { NextResponse } from "next/server"
import axios from "axios"
import * as cheerio from "cheerio"

// Fallback sample data if scraping fails
const fallbackJobs = [
  {
    id: 1,
    title: "AI Engineer",
    company: "Tech Startup",
    location: "New York, NY",
    description: "Build and deploy scalable AI systems for enterprise clients.",
    applyUrl: "https://www.builtinnyc.com/job/ai-engineer",
  },
]

export async function GET() {
  try {
    const { data } = await axios.get("https://www.builtinnyc.com/jobs/artificial-intelligence", {
      headers: { "User-Agent": "Mozilla/5.0 (compatible; JobScraper/1.0)" },
    })
    const $ = cheerio.load(data)
    const jobs: any[] = []

    // Scan every job link and filter for AI-related roles suitable for graduate business students
    const seen = new Set();
    let count = 0;
    $("a[href*='/job/']").each((i, el) => {
      const href = $(el).attr("href");
      const titleRaw = $(el).text().trim();
      const title = titleRaw.substring(0, 80);

      // Avoid duplicates (same URL, or blank title)
      if (!href || seen.has(href) || !title) return;
      seen.add(href);

      // Only consider roles that seem relevant for grad business students AND are AI related
      // We'll check for indicators in the title
      // Examples: "AI", "Artificial Intelligence", "Data", "Machine Learning", "Analytics", "Product", "Strategy", "Business", "Manager", "Operations", "Research", "Consultant"
      const suitableTitle =
        /\b(ai|artificial intelligence|machine learning|data|analytics|product|strategy|business|manager|operations|research|consultant)\b/i.test(title);

      // But filter out hardcore software-only roles, like "engineer", "developer", "designer" unless they are specifically titled for Product, Strategy, etc.
      const unsuitableForBiz = /\b(engineer|developer|software|full[- ]?stack|frontend|backend|devops|designer)\b/i.test(title)
        && !/\b(product|strategy|business|manager|analyst|consultant)\b/i.test(title);

      // Strong signal for suitability
      if (suitableTitle && !unsuitableForBiz) {
        // Try to find the company name associated with this listing
        // The structure is each "a[href*='/job/']" is inside a ".views-row" or similar,
        // and usually a sibling/company node exists with company name
        let company = "Built In NYC";
        const jobRow = $(el).closest(".views-row");
        if (jobRow.length) {
          // Company name is commonly within a <div class="listing-company"> or sim. Try some selectors:
          company =
            jobRow.find(".listing-company, .company-title, .company-link, .company a").first().text().trim() ||
            company;
          // Fallback: try next sibling .company or similar
          if (!company) {
            company = jobRow.find(".company").first().text().trim() || company;
          }
        } else {
          // As a fallback, attempt to check the next element for company name
          const nextCompany =
            $(el).parent().find(".listing-company, .company-title, .company-link, .company a, .company").first().text().trim();
          if (nextCompany) company = nextCompany;
        }

        company = company == "Build in NYC" ? "" : company,
        
        jobs.push({
          id: jobs.length + 1,
          title,
          description:
            "AI or data/analytics related position appropriate for graduate business students. Sourced from Built In NYC.",
          applyUrl: `https://www.builtinnyc.com${href}`,
        });
        count++;
      }

      // Only collect 12 max
      if (count >= 12) return false; // breaks .each loop
    });


    return NextResponse.json(jobs.length ? jobs : fallbackJobs)
  } catch (err) {
    console.error("Scrape failed:", err)
    return NextResponse.json(fallbackJobs)
  }
}
