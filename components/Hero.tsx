import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Globe } from "lucide-react";
import { heroTags, siteInfo } from "@/lib/site-data";
import { ArrowButton } from "@/components/ui/primitives";

export function Hero() {
  return (
    <section className="relative pt-10 pb-6 sm:pt-16 sm:pb-10 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top row: social proof + hire badge */}
        <div className="hidden md:flex items-start justify-between mb-6">
          <div className="max-w-[220px] space-y-3">
            <p className="text-xs text-muted-foreground leading-relaxed italic">
              &ldquo;Kelvin&apos;s engineering transformed our platform — highly recommended!&rdquo;
            </p>
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-7 w-7 rounded-full bg-secondary border-2 border-background"
                  />
                ))}
              </div>
              <p className="text-[10px] text-muted-foreground leading-tight">
                <strong className="text-foreground">{siteInfo.reviewSummary.count}</strong> Reviews
                <br />
                ({siteInfo.reviewSummary.rating} of 5) {siteInfo.reviewSummary.label}
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="relative flex h-24 w-24 items-center justify-center"
            aria-label="Hire me"
          >
            <svg className="absolute inset-0 animate-spin-slow" viewBox="0 0 100 100">
              <defs>
                <path id="circle" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
              </defs>
              <text fontSize="11" fontWeight="600" letterSpacing="3">
                <textPath href="#circle" className="fill-foreground uppercase">
                  Hire Me • Hire Me •
                </textPath>
              </text>
            </svg>
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <svg width="16" height="16" viewBox="0 0 14 14" fill="none">
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

          <div className="flex items-center gap-2">
            {[
              { href: siteInfo.socials.github, icon: Github },
              { href: siteInfo.socials.linkedin, icon: Linkedin },
              { href: siteInfo.socials.website, icon: Globe },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* Heading */}
        <div className="text-center space-y-2 mb-8 sm:mb-12">
          <p className="text-sm font-medium">
            <span className="text-foreground">—</span> Hello There!
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            I&apos;m{" "}
            <span className="text-primary relative inline-block">
              {siteInfo.fullName.split(" ").slice(0, 2).join(" ")}
              <span className="absolute -right-6 -top-2 text-primary text-2xl hidden sm:inline">✦</span>
            </span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            {siteInfo.role} based in {siteInfo.location}
          </p>
        </div>

        {/* Portrait + floating tags */}
        <div className="relative flex justify-center mb-10 sm:mb-14">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="h-[280px] w-[280px] sm:h-[340px] sm:w-[340px] rounded-full bg-primary/90" />
          </div>

          {/* Floating tags */}
          <div className="absolute inset-0 max-w-lg mx-auto hidden sm:block pointer-events-none">
            {heroTags.map((tag, i) => {
              const positions = [
                "top-[8%] left-[0%]",
                "top-[5%] right-[0%]",
                "top-[42%] -left-[8%]",
                "bottom-[18%] -right-[4%]",
                "bottom-[8%] left-[8%]",
              ];
              return (
                <span
                  key={tag.label}
                  className={`absolute ${positions[i]} inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold shadow-sm ${
                    tag.variant === "primary"
                      ? "bg-primary text-primary-foreground"
                      : "bg-foreground text-background"
                  }`}
                >
                  {tag.icon && (
                    <span className="h-5 w-5 rounded-full bg-primary flex items-center justify-center text-[10px]">
                      ⚡
                    </span>
                  )}
                  {tag.label}
                </span>
              );
            })}
          </div>

          <div className="relative z-10 h-[300px] w-[240px] sm:h-[380px] sm:w-[300px]">
            <Image
              src="/kelvin.jpg"
              alt={siteInfo.fullName}
              fill
              priority
              className="object-cover object-top rounded-2xl"
              sizes="(max-width: 640px) 240px, 300px"
            />
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <ArrowButton href="/projects" label="Portfolio" variant="dark" />
          <ArrowButton href="/contact" label="Hire Me" variant="light" />
        </div>
      </div>
    </section>
  );
}
