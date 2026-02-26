"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useAdminKey } from "../../../context/AdminKeyContext";
import { BlogPostForm } from "../../BlogPostForm";
import type { BlogPost } from "@/data/blog-types";

export default function EditBlogPostPage() {
  const params = useParams();
  const id = params?.id as string;
  const { getHeaders } = useAdminKey();
  const [post, setPost] = useState<BlogPost | null | undefined>(undefined);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/admin/blogs/${id}`, { headers: getHeaders() })
      .then((r) => {
        if (!r.ok) throw new Error("Not found");
        return r.json();
      })
      .then(setPost)
      .catch(() => setPost(null));
  }, [id, getHeaders]);

  if (post === undefined) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-gray-500">Loading…</p>
      </div>
    );
  }
  if (post === null) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <p className="text-red-500">Post not found.</p>
        <Link href="/admin/blog" className="mt-4 inline-block text-accent-blue dark:text-accent-cyan">
          Back to blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <Link
        href="/admin/blog"
        className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 mb-6 inline-block"
      >
        ← Back to blog
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
        Edit: {post.title}
      </h1>
      <BlogPostForm post={post} mode="edit" />
    </div>
  );
}
