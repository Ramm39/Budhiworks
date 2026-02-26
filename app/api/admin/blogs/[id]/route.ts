import { NextRequest, NextResponse } from "next/server";
import { getBlogs, getBlogById, saveBlogs, slugify } from "@/lib/blogs";
import type { BlogPost } from "@/data/blog-types";

function requireAdmin(request: NextRequest): boolean {
  const secret = process.env.BLOG_ADMIN_SECRET;
  if (!secret) return true;
  const key = request.headers.get("x-admin-key");
  return key === secret;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const post = await getBlogById(id);
    if (!post) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(post);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to load blog" },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const existing = await getBlogById(id);
    if (!existing) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    const body = await request.json();
    const now = new Date().toISOString();
    const slug = body.slug?.trim() || slugify(body.title || existing.title);
    const blogs = await getBlogs();
    const index = blogs.findIndex((b) => b.id === id);
    if (index < 0) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    const updated: BlogPost = {
      ...existing,
      slug,
      title: body.title ?? existing.title,
      excerpt: body.excerpt ?? existing.excerpt,
      content: body.content ?? existing.content,
      coverImage: body.coverImage !== undefined ? body.coverImage : existing.coverImage,
      author: body.author ?? existing.author,
      publishedAt: body.publishedAt ?? existing.publishedAt,
      updatedAt: now,
      published: body.published !== undefined ? body.published : existing.published,
    };
    if (blogs.some((b) => b.slug === updated.slug && b.id !== id)) {
      return NextResponse.json(
        { error: "Another post already has this slug" },
        { status: 400 }
      );
    }
    blogs[index] = updated;
    await saveBlogs(blogs);
    return NextResponse.json(updated);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to update blog" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  if (!requireAdmin(request)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  try {
    const { id } = await params;
    const blogs = await getBlogs();
    const filtered = blogs.filter((b) => b.id !== id);
    if (filtered.length === blogs.length) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }
    await saveBlogs(filtered);
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
