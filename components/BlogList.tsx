"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Calendar, Tag } from "lucide-react";
import { BlogPost } from "@/lib/content";

export function BlogList({ posts }: { posts: BlogPost[] }) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="space-y-8">
      {/* Search Input */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <input
          type="text"
          placeholder="Search articles by title or tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-border/40 bg-card/50 backdrop-blur-sm focus:outline-none focus:border-primary/50 text-sm transition-all"
        />
      </div>

      {filteredPosts.length === 0 ? (
        <div className="text-center py-12 border border-dashed border-border/60 rounded-2xl bg-card/20">
          <p className="text-muted-foreground text-sm">No articles matched your search.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.slug}
              className="flex flex-col p-6 rounded-2xl border border-border/40 bg-card/45 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                <Calendar size={12} />
                <span>{post.date}</span>
              </div>

              <h2 className="text-xl font-bold mb-2 hover:text-primary transition-colors leading-snug">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {post.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/30">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-foreground bg-secondary/85 px-2 py-0.5 rounded border border-border/20"
                  >
                    <Tag size={10} />
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
