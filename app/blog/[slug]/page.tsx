import { notFound } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { PageBackground } from "@/components/ui/PageBackground";
import { Footer } from "@/components/Footer";
import { getBlogBySlug } from "@/lib/blogs";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post || post.published === false) return {};
  return {
    title: `${post.title} | Blog | Buddhiworks`,
    description: post.excerpt || undefined,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogBySlug(slug);
  if (!post || post.published === false) notFound();
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <BlogPostContent post={post} />
      <Footer />
    </main>
  );
}
