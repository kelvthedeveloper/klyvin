import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/content";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return { title: "Not Found" };
  return { title: `${post.title} | Kelvin`, description: post.description };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20 space-y-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft size={16} /> Back to blog
      </Link>

      <header className="space-y-4">
        <p className="text-sm text-primary font-semibold">{post.date}</p>
        <h1 className="text-3xl sm:text-4xl font-bold leading-tight">{post.title}</h1>
        <p className="text-muted-foreground">{post.description}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-secondary">
              {tag}
            </span>
          ))}
        </div>
      </header>

      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
    </article>
  );
}
