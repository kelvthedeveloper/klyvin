'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Terminal } from '@/components/terminal/Terminal';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden bg-gradient-premium">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-klyvin-blue/5 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-klyvin-orange/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-border/40 mb-8 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-klyvin-orange" />
          <span className="text-sm font-medium text-muted-foreground tracking-wide">
            AVAILABLE FOR SENIOR ROLES 2026
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-6xl md:text-8xl font-black tracking-tight text-foreground mb-6"
        >
          Engineering <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-klyvin-blue to-klyvin-orange">
            Scalable Products
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Senior Frontend Engineer specializing in high-performance 
          web architecture and interactive product design.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-20"
        >
          <Button size="lg" className="bg-klyvin-blue hover:bg-klyvin-blue/90 text-white px-8 py-7 text-lg rounded-xl shadow-xl shadow-klyvin-blue/20 group">
            View Architecture
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="px-8 py-7 text-lg rounded-xl border-border/60 hover:bg-slate-50">
            Playground
          </Button>
        </motion.div>

        {/* Hero Terminal */}
        <div className="relative w-full max-w-4xl mx-auto">
          <div className="absolute inset-0 bg-klyvin-blue/10 blur-3xl rounded-full" />
          <Terminal />
        </div>
      </div>

      {/* Floating Icons Background */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 hidden lg:block p-4 bg-white rounded-2xl shadow-xl border border-border/40"
      >
        <Code2 className="w-8 h-8 text-klyvin-blue" />
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-10 hidden lg:block p-4 bg-white rounded-2xl shadow-xl border border-border/40"
      >
        <Globe className="w-8 h-8 text-klyvin-orange" />
      </motion.div>
    </section>
  );
};
