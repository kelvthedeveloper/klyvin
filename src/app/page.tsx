'use client';

import { Hero } from "@/components/layout/Hero";
import { FeaturedProjects } from "@/components/project/FeaturedProjects";
import { SkillsEcosystem } from "@/components/layout/SkillsEcosystem";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Shield, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <Hero />
      
      <FeaturedProjects />

      <SkillsEcosystem />

      {/* Build Philosophy */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center text-center mb-20">
            <Badge variant="outline" className="border-slate-200 text-slate-500 mb-4">PHILOSOPHY</Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Build Beyond Code</h2>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Engineering is not just about writing lines; it's about architecting 
              experiences that solve complex problems with elegant simplicity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Systems Thinking", 
                desc: "Viewing every feature as part of a larger, interconnected ecosystem to ensure long-term stability.",
                icon: Shield,
                accent: "text-klyvin-blue",
                bg: "bg-klyvin-blue/5"
              },
              { 
                title: "Premium Craft", 
                desc: "Obsessive attention to micro-interactions, accessibility, and performance optimizations.",
                icon: Target,
                accent: "text-klyvin-orange",
                bg: "bg-klyvin-orange/5"
              },
              { 
                title: "Scalable Growth", 
                desc: "Architecting frontend systems that can scale from small prototypes to enterprise-grade platforms.",
                icon: Rocket,
                accent: "text-slate-800",
                bg: "bg-slate-100"
              }
            ].map((p, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl border border-border/40 hover:border-klyvin-blue/20 transition-all group bg-white shadow-sm hover:shadow-xl"
              >
                <div className={`w-14 h-14 ${p.bg} ${p.accent} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
                <div className="flex items-center text-sm font-bold tracking-wider uppercase opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                  LEARN MORE <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-klyvin-blue/[0.02] pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-5xl mx-auto p-12 md:p-20 rounded-[3rem] bg-slate-900 text-white relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-klyvin-blue/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-klyvin-orange animate-ping" />
                  <span className="text-klyvin-orange font-bold tracking-widest text-sm uppercase">Available for projects</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
                  Ready to build the <br />
                  <span className="text-klyvin-blue">Next Big Thing?</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 max-w-md leading-relaxed">
                  I'm currently looking for new opportunities to lead engineering 
                  teams and build world-class products.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button size="lg" className="bg-klyvin-blue hover:bg-klyvin-blue/90 text-white px-8 h-14 rounded-2xl">
                    Start a Conversation
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-slate-800 px-8 h-14 rounded-2xl">
                    Check Calendar
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block relative">
                <div className="w-full aspect-square rounded-3xl border border-slate-800 bg-slate-800/50 backdrop-blur-sm flex items-center justify-center relative group overflow-hidden">
                   <div className="absolute inset-0 bg-gradient-to-br from-klyvin-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                   <Sparkles className="w-32 h-32 text-slate-700 group-hover:text-klyvin-blue transition-colors duration-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
