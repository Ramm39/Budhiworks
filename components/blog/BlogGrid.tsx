"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { defaultViewport, staggerTransition } from "@/lib/motion";
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

export function BlogGrid({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) {
    return (
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-500 dark:text-gray-400 text-lg">
            No posts yet. Check back soon.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={defaultViewport}
              transition={{
                ...staggerTransition,
                delay: index * 0.06,
              }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block h-full rounded-xl sm:rounded-2xl overflow-hidden bg-white/5 dark:bg-dark-tile backdrop-blur-sm border border-gray-200/50 dark:border-dark-border hover:border-accent-blue/30 dark:hover:border-accent-cyan/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent-blue/5 dark:hover:shadow-accent-cyan/5"
              >
                <div className="relative w-full h-[200px] sm:h-[220px] md:h-[240px] overflow-hidden bg-gray-100 dark:bg-gray-900">
                  {post.coverImage ? (
                    <Image
                      src={post.coverImage}
                      alt={post.title ? `Blog: ${post.title}` : "Blog post cover"}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20"
                      aria-hidden
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 sm:p-6">
                  <time
                    className="text-xs font-medium tracking-wider text-accent-blue dark:text-accent-cyan uppercase"
                    dateTime={post.publishedAt}
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                  <h2 className="mt-2 text-lg sm:text-xl font-semibold text-gray-900 dark:text-white line-clamp-2 group-hover:text-accent-blue dark:group-hover:text-accent-cyan transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="mt-3 inline-block text-sm font-medium text-accent-blue dark:text-accent-cyan">
                    Read more →
                  </span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
