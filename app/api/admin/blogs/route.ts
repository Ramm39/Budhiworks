import { NextRequest, NextResponse } from "next/server";
import { getBlogs } from "@/lib/blogs";

function requireAdmin(request: NextRequest): boolean {
  const secret = process.env.BLOG_ADMIN_SECRET;
  if (!secret) return true;
  const key = request.headers.get("x-admin-key");
  return key === secret;
}

export async function GET(request: NextRequest) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const blogs = await getBlogs();
    const sorted = [...blogs].sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
    return NextResponse.json(sorted);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to load blogs" },
      { status: 500 }
    );
  }
}
