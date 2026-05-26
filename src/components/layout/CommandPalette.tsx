'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Command, Search, Code2, Layers, Play, Mail, User, Terminal as TerminalIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const actions = [
  { name: 'Go Home', href: '/', icon: TerminalIcon, shortcut: 'H' },
  { name: 'About Klyvin', href: '/about', icon: User, shortcut: 'A' },
  { name: 'View Projects', href: '/projects', icon: Code2, shortcut: 'P' },
  { name: 'Architecture Labs', href: '/architecture', icon: Layers, shortcut: 'S' },
  { name: 'Playground', href: '/playground', icon: Play, shortcut: 'X' },
  { name: 'Contact Me', href: '/contact', icon: Mail, shortcut: 'C' },
];

export const CommandPalette = () => {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState('');
  const router = useRouter();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const filteredActions = query === '' 
    ? actions 
    : actions.filter(a => a.name.toLowerCase().includes(query.toLowerCase()));

  const handleSelect = (href: string) => {
    router.push(href);
    setOpen(false);
    setQuery('');
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 md:hidden">
        <button 
          onClick={() => setOpen(true)}
          className="w-12 h-12 bg-klyvin-blue text-white rounded-full shadow-lg flex items-center justify-center"
        >
          <Command className="w-6 h-6" />
        </button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[550px] p-0 gap-0 bg-white/90 backdrop-blur-xl border-border/40 overflow-hidden rounded-2xl shadow-2xl">
          <div className="flex items-center border-b border-border/40 px-4 h-16">
            <Search className="mr-3 h-5 w-5 text-muted-foreground shrink-0" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command or search..."
              className="h-full border-0 focus-visible:ring-0 bg-transparent text-lg px-0"
              autoFocus
            />
            <div className="flex items-center space-x-1 ml-4 shrink-0">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-border/60 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>
          <ScrollArea className="max-h-[350px]">
            <div className="p-2">
              <div className="px-3 py-2 text-[10px] font-black uppercase tracking-widest text-muted-foreground opacity-50">
                Navigation
              </div>
              {filteredActions.map((action) => (
                <button
                  key={action.name}
                  onClick={() => handleSelect(action.href)}
                  className="w-full flex items-center justify-between px-3 py-4 rounded-xl hover:bg-klyvin-blue/5 group transition-colors text-left"
                >
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mr-4 group-hover:bg-klyvin-blue/10 group-hover:text-klyvin-blue transition-colors">
                      <action.icon className="w-5 h-5" />
                    </div>
                    <span className="font-bold text-slate-700">{action.name}</span>
                  </div>
                  <kbd className="pointer-events-none hidden sm:inline-flex h-5 select-none items-center gap-1 rounded border border-border/60 bg-slate-50 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                    {action.shortcut}
                  </kbd>
                </button>
              ))}
            </div>
          </ScrollArea>
          <div className="flex items-center justify-between border-t border-border/40 px-4 py-3 bg-slate-50/50 text-[10px] font-medium text-muted-foreground uppercase tracking-widest">
            <div className="flex items-center space-x-4">
              <div className="flex items-center"><span className="mr-1 font-bold">↵</span> SELECT</div>
              <div className="flex items-center"><span className="mr-1 font-bold">↑↓</span> NAVIGATE</div>
            </div>
            <div>ESC TO CLOSE</div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
