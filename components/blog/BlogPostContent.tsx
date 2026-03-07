"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "@/data/blog-types";

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  return (
    <article className="relative py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-accent-blue dark:hover:text-accent-cyan mb-8 transition-colors"
        >
          ← Back to blog
        </Link>
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <time
            className="text-xs font-medium tracking-wider text-accent-blue dark:text-accent-cyan uppercase"
            dateTime={post.publishedAt}
          >
            {formatDate(post.publishedAt)}
          </time>
          <h1 className="mt-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            {post.title}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            By {post.author}
          </p>
        </motion.header>
        {post.coverImage && (
          <motion.div
            className="relative mt-8 rounded-xl overflow-hidden aspect-video bg-gray-100 dark:bg-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
          >
            <Image
              src={post.coverImage}
              alt={post.title ? `Blog: ${post.title}` : "Blog post cover"}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </motion.div>
        )}
        <motion.div
          className="mt-8 prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-a:text-accent-blue dark:prose-a:text-accent-cyan prose-a:no-underline hover:prose-a:underline"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.15 }}
          dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
        />
      </div>
    </article>
  );
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c] ?? c);
}

function formatContent(text: string): string {
  if (!text) return "";
  const escaped = escapeHtml(text);
  const paragraphs = escaped.split(/\n\n+/).filter(Boolean);
  return paragraphs
    .map((p) => `<p class="mb-4 leading-relaxed">${p.replace(/\n/g, "<br />")}</p>`)
    .join("");
}
