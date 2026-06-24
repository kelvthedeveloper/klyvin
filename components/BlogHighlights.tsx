"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/content";

export function BlogHighlights({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null;

  return (
    <section className="space-y-10" id="writing">
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          Technical writing
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] font-serif">
          Latest
          <br />
          <span className="text-primary">Articles</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mt-2">
          Practical insights on React, Next.js, TypeScript, and software architecture from shipping production code.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {posts.slice(0, 4).map((post, idx) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group p-6 rounded-2xl border border-border/40 bg-card/40 hover:border-primary/30 hover:bg-card/60 transition-all duration-300"
          >
            <span className="text-[10px] font-mono text-primary font-bold">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-bold text-foreground mt-2 group-hover:text-primary transition-colors leading-snug">
              {post.title}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed mt-2 line-clamp-2">
              {post.description}
            </p>
            <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/20">
              <span className="text-[10px] font-mono text-muted-foreground">{post.date}</span>
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Read
                <ArrowRight size={12} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:underline"
      >
        View All Articles
      </Link>
    </section>
  );
}
