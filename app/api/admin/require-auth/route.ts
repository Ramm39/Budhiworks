import { NextResponse } from "next/server";

export async function GET() {
  const require = !!process.env.BLOG_ADMIN_SECRET;
  return NextResponse.json({ require });
}
