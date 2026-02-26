import { Navbar } from "@/components/Navbar";
import { BlurredSections } from "@/components/ui/BlurredSections";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { PageBackground } from "@/components/ui/PageBackground";
import { Footer } from "@/components/Footer";
import { getPublishedBlogs } from "@/lib/blogs";

export const metadata = {
  title: "Blog | Buddhiworks",
  description:
    "Insights on software, design, and building products that last.",
};

export default async function BlogPage() {
  const posts = await getPublishedBlogs();
  return (
    <main className="min-h-screen relative">
      <PageBackground variant="alt" />
      <Navbar />
      <BlogHero />
      <BlurredSections>
        <BlogGrid posts={posts} />
      </BlurredSections>
      <Footer />
    </main>
  );
}
