export const runtime = "nodejs"; // Ensure not edge runtime

export async function GET() {
  try {
    // Build absolute URL inside Vercel
    const baseUrl =
      process.env.VERCEL_URL
        ? `https://${process.env.VERCEL_URL}`
        : "http://localhost:3000";

    const res = await fetch(`${baseUrl}/api/crypto-sentiment`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Python API error: ${res.status}`);
    }

    const data = await res.json();
    return Response.json(data);

  } catch (err: any) {
    console.error("Error calling Python API:", err);
    return Response.json([], { status: 200 });
  }
}
