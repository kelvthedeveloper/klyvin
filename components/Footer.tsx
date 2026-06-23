import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/kelvthedeveloper", icon: Github, label: "GitHub" },
    { href: "https://linkedin.com/in/kelvthedeveloper", icon: Linkedin, label: "LinkedIn" },
    { href: "https://twitter.com/kelvthedeveloper", icon: Twitter, label: "Twitter" },
    { href: "mailto:kelvin@example.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="border-t border-border/40 bg-background/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {currentYear} Kelvin. Built with Next.js, React, Tailwind CSS, and shadcn/ui.
          </p>
        </div>
        
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-200"
                aria-label={link.label}
              >
                <Icon size={18} />
              </Link>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
