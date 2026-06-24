import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { heroTags, siteInfo } from "@/lib/site-data";
import { ArrowButton } from "@/components/ui/primitives";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/[0.08] blur-3xl" />
        <div className="absolute top-10 -right-10 h-48 w-48 rounded-full bg-accent blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-10 items-center">
          {/* Copy */}
          <div className="space-y-5 text-center lg:text-left order-2 lg:order-1">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3">
              <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/80 px-3 py-1 text-xs sm:text-sm font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Hello There!
              </p>
              <span className="hidden sm:inline-flex items-center gap-2 text-[11px] text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Available for hire
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1]">
                I&apos;m{" "}
                <span className="text-primary">
                  {siteInfo.fullName.split(" ").slice(0, 2).join(" ")}
                </span>
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto lg:mx-0">
                <span className="font-medium text-foreground">{siteInfo.role}</span>
                {" · "}
                {siteInfo.location}
              </p>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0 hidden sm:block">
              {siteInfo.title}. I design and ship AI-powered SaaS with Next.js, React, TypeScript, and Django.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2">
              {heroTags.slice(0, 4).map((tag) => (
                <span
                  key={tag.label}
                  className={`px-3 py-1 rounded-full text-[11px] font-semibold ${
                    tag.variant === "primary"
                      ? "bg-primary text-primary-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  {tag.label}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 pt-1">
              <ArrowButton href="/projects" label="View Portfolio" variant="dark" />
              <ArrowButton href="/contact" label="Hire Me" variant="light" />
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-2 pt-1">
              {[
                { href: siteInfo.socials.github, icon: Github },
                { href: siteInfo.socials.linkedin, icon: Linkedin },
              ].map(({ href, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Portrait */}
          <div className="relative flex justify-center order-1 lg:order-2">
            <Link
              href="/contact"
              className="absolute top-0 right-4 sm:right-8 lg:right-4 z-20 hidden sm:flex h-16 w-16 items-center justify-center group"
              aria-label="Hire me"
            >
              <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 100 100">
                <defs>
                  <path id="hero-circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                </defs>
                <text fontSize="11" fontWeight="600" letterSpacing="3">
                  <textPath href="#hero-circle" className="fill-foreground uppercase">
                    Hire Me •
                  </textPath>
                </text>
              </svg>
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/25">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path
                    d="M3 11L11 3M11 3H5M11 3V9"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>

            <div className="relative h-[300px] w-[270px] sm:h-[350px] sm:w-[320px]">
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 h-[240px] w-[240px] sm:h-[290px] sm:w-[290px] rounded-full bg-gradient-to-br from-primary via-[#ff6b45] to-[#ff8f70]"
                aria-hidden
              />
              <Image
                src="/kelvin.png"
                alt={siteInfo.fullName}
                fill
                priority
                className="hero-portrait-cutout object-contain object-bottom scale-105"
                sizes="(max-width: 640px) 270px, 320px"
              />
              <div
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-4 w-[50%] rounded-[100%] bg-foreground/10 blur-lg"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
