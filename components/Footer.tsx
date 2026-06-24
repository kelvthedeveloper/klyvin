import Link from "next/link";
import { Github, Linkedin, Globe, Mail } from "lucide-react";
import { siteInfo } from "@/lib/site-data";
import { ArrowButton } from "@/components/ui/primitives";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      {/* CTA band */}
      <div className="bg-foreground text-background py-16 sm:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Have a project in mind?
          </h2>
          <p className="text-white/60 max-w-md mx-auto text-sm sm:text-base">
            Let&apos;s build something great together. I&apos;m available for freelance, contract, and
            full-time opportunities.
          </p>
          <ArrowButton href="/contact" label="Let's Talk" variant="primary" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
              K
            </span>
            <span className="font-bold">{siteInfo.firstName}.</span>
          </Link>

          <div className="flex items-center gap-3">
            {[
              { href: siteInfo.socials.github, icon: Github },
              { href: siteInfo.socials.linkedin, icon: Linkedin },
              { href: `mailto:${siteInfo.email}`, icon: Mail },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">
            &copy; {year} {siteInfo.fullName}. {siteInfo.location}
          </p>
        </div>
      </div>
    </footer>
  );
}
