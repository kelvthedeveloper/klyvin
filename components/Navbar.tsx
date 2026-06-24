"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteInfo } from "@/lib/site-data";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blogs" },
  { href: "/testimonials", label: "Testimonials" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
            K
          </span>
          <span className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
            {siteInfo.firstName}.
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden sm:inline-flex px-5 py-2.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-foreground/90 transition-colors"
          >
            Contact Me
          </Link>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-border px-4 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={cn(
                "px-4 py-3 text-sm font-medium rounded-xl",
                pathname === link.href
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              )}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 bg-foreground text-background text-sm font-semibold rounded-full text-center"
          >
            Contact Me
          </Link>
        </nav>
      )}
    </header>
  );
}
