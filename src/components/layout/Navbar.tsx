'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Menu, X, Code2, Terminal, Layers, Play, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navItems = [
  { name: 'Home', href: '/', icon: Terminal },
  { name: 'About', href: '/about', icon: User },
  { name: 'Projects', href: '/projects', icon: Code2 },
  { name: 'Playground', href: '/playground', icon: Play },
  { name: 'Architecture', href: '/architecture', icon: Layers },
  { name: 'Contact', href: '/contact', icon: Mail },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled 
          ? 'bg-white/70 backdrop-blur-lg border-border/40 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-klyvin-blue rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:rotate-12 transition-transform">
            K
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">
            KLYVIN<span className="text-klyvin-blue">.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href}>
              <Button 
                variant="ghost" 
                className="text-sm font-medium hover:text-klyvin-blue hover:bg-klyvin-blue/5 transition-colors"
              >
                {item.name}
              </Button>
            </Link>
          ))}
          <div className="ml-4 pl-4 border-l border-border/40">
            <Button className="bg-klyvin-blue hover:bg-klyvin-blue/90 text-white shadow-lg shadow-klyvin-blue/20">
              Resume
            </Button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger render={
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            } />
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white/95 backdrop-blur-xl border-l border-border/40">
              <div className="flex flex-col space-y-6 mt-10">
                {navItems.map((item) => (
                  <Link key={item.name} href={item.href} className="flex items-center space-x-4 p-2 rounded-xl hover:bg-klyvin-blue/5 group transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-klyvin-blue/10 group-hover:text-klyvin-blue transition-colors">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-semibold">{item.name}</span>
                  </Link>
                ))}
                <Button className="w-full bg-klyvin-blue hover:bg-klyvin-blue/90 text-white py-6 text-lg mt-4">
                  Download Resume
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};
