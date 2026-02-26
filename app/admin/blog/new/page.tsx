"use client";

import Link from "next/link";
import { BlogPostForm } from "../BlogPostForm";

export default function NewBlogPostPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/admin/blog"
        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mb-6 inline-block"
      >
        ← Back to blog
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        New blog post
      </h1>
      <BlogPostForm mode="create" />
    </div>
  );
}
