import { promises as fs } from "fs";
import path from "path";
import type { BlogPost } from "@/data/blog-types";

const BLOGS_PATH = path.join(process.cwd(), "data", "blogs.json");

export async function getBlogs(): Promise<BlogPost[]> {
  const raw = await fs.readFile(BLOGS_PATH, "utf-8");
  const data = JSON.parse(raw);
  return Array.isArray(data) ? data : [];
}

export async function getPublishedBlogs(): Promise<BlogPost[]> {
  const blogs = await getBlogs();
  return blogs
    .filter((b) => b.published !== false)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getBlogBySlug(slug: string): Promise<BlogPost | null> {
  const blogs = await getBlogs();
  return blogs.find((b) => b.slug === slug) ?? null;
}

export async function getBlogById(id: string): Promise<BlogPost | null> {
  const blogs = await getBlogs();
  return blogs.find((b) => b.id === id) ?? null;
}

export async function saveBlogs(blogs: BlogPost[]): Promise<void> {
  await fs.writeFile(BLOGS_PATH, JSON.stringify(blogs, null, 2), "utf-8");
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
}
