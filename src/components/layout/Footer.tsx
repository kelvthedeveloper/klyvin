import React from 'react';
import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-border/40 py-20 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-klyvin-blue rounded-lg flex items-center justify-center text-white font-bold text-lg">
                K
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground">
                KLYVIN<span className="text-klyvin-blue">.</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-8 leading-relaxed">
              A premium engineering portfolio showcasing high-performance web architecture, 
              interactive product design, and scalable frontend systems.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: Github, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: '#' },
              ].map((social, i) => (
                <Link 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-border/60 flex items-center justify-center text-muted-foreground hover:text-klyvin-blue hover:border-klyvin-blue/30 hover:bg-klyvin-blue/5 transition-all"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/" className="hover:text-klyvin-blue transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-klyvin-blue transition-colors">About</Link></li>
              <li><Link href="/projects" className="hover:text-klyvin-blue transition-colors">Projects</Link></li>
              <li><Link href="/playground" className="hover:text-klyvin-blue transition-colors">Playground</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-foreground uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4 text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-klyvin-blue transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-klyvin-blue transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-klyvin-blue transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/40 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Klyvin. All rights reserved.</p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <span>Built with</span>
            <span className="text-klyvin-blue font-semibold">Next.js 15</span>
            <span>&</span>
            <span className="text-klyvin-orange font-semibold">Framer Motion</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
