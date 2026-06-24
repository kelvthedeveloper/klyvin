import Link from "next/link";
import { getBlogPosts } from "@/lib/content";
import { PageHeader } from "@/components/ui/primitives";

export const metadata = {
  title: "Blog | Kelvin Nii Amu Okai",
  description: "Technical articles on React, Next.js, TypeScript, and software architecture.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-12">
      <PageHeader
        label="Technical Writing"
        title="Blog & Insights"
        description="Practical tutorials and deep dives from building production software."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group bg-secondary rounded-2xl p-6 sm:p-8 hover:bg-secondary/80 transition-colors"
          >
            <p className="text-xs font-semibold text-primary">{post.date}</p>
            <h2 className="text-xl font-bold mt-2 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed line-clamp-2">
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {post.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-background border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
