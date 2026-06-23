import { getBlogPosts } from "@/lib/content";
import { BlogList } from "@/components/BlogList";

export const metadata = {
  title: "Blog | Kelvin's Tech Insights",
  description: "Read technical articles on React, Next.js, TypeScript, and Software Architecture written by Kelvin.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-10">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Blog</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Thoughts, guides, and insights on modern web development, backend engineering, and system design.
        </p>
      </div>

      <BlogList posts={posts} />
    </div>
  );
}
