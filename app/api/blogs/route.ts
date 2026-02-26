import { NextRequest, NextResponse } from "next/server";
import { getBlogs, saveBlogs, slugify } from "@/lib/blogs";
import type { BlogPost } from "@/data/blog-types";

function requireAdmin(request: NextRequest): boolean {
  const secret = process.env.BLOG_ADMIN_SECRET;
  if (!secret) return true; // no secret set = allow in dev
  const key = request.headers.get("x-admin-key");
  return key === secret;
}

export async function GET() {
  try {
    const blogs = await getBlogs();
    const published = blogs
      .filter((b) => b.published !== false)
      .sort(
        (a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    return NextResponse.json(published);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to load blogs" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await request.json();
    const blogs = await getBlogs();
    const now = new Date().toISOString();
    const slug =
      body.slug?.trim() || slugify(body.title || "untitled");
    const id =
      body.id ||
      `${slug}-${Date.now().toString(36)}`;
    const post: BlogPost = {
      id,
      slug,
      title: body.title || "Untitled",
      excerpt: body.excerpt || "",
      content: body.content || "",
      coverImage: body.coverImage || undefined,
      author: body.author || "Buddhiworks",
      publishedAt: body.publishedAt || now,
      updatedAt: now,
      published: body.published !== false,
    };
    if (blogs.some((b) => b.slug === post.slug && b.id !== post.id)) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 400 }
      );
    }
    const existing = blogs.findIndex((b) => b.id === id);
    if (existing >= 0) {
      blogs[existing] = { ...post, updatedAt: now };
    } else {
      blogs.push(post);
    }
    await saveBlogs(blogs);
    return NextResponse.json(post);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to create or update blog" },
      { status: 500 }
    );
  }
}
