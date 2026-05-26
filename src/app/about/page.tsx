'use client';

import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <Badge variant="outline" className="border-klyvin-blue/20 text-klyvin-blue mb-4">ABOUT</Badge>
      <h1 className="text-5xl font-black mb-12">The Architect Behind <br/><span className="text-klyvin-blue">Klyvin.</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="prose prose-lg text-muted-foreground leading-relaxed">
          <p>
            I am a senior frontend engineer and product designer with a passion for building 
            high-performance web systems that don't just work—they feel magical.
          </p>
          <p>
            With over 3 years of experience in the industry, I've led engineering teams at 
            fast-growing startups and helped scale products to millions of users. My approach 
            combines deep technical expertise with a refined eye for design.
          </p>
          <p>
            I believe that great software is the intersection of robust engineering and 
            intentional product design. Every pixel and every line of code should serve a 
            purpose in the larger system.
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[3/4] md:aspect-square lg:aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[3rem] border border-border/40 shadow-2xl group"
        >
          <Image 
            src="/klyvin.png" 
            alt="Klyvin"
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-klyvin-blue/20 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
}
