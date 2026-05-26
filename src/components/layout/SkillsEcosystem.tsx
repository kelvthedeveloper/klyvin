'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Cpu, 
  Globe, 
  Layout, 
  Smartphone, 
  Database, 
  Cloud, 
  Zap, 
  ShieldCheck,
  Server
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const skills = [
  { name: 'React/Next.js', icon: Code2, category: 'Frontend', color: 'bg-blue-500' },
  { name: 'TypeScript', icon: Code2, category: 'Language', color: 'bg-blue-600' },
  { name: 'Tailwind CSS', icon: Layout, category: 'UI/UX', color: 'bg-cyan-400' },
  { name: 'Framer Motion', icon: Zap, category: 'Animation', color: 'bg-purple-500' },
  { name: 'Node.js', icon: Server, category: 'Backend', color: 'bg-green-500' },
  { name: 'PostgreSQL', icon: Database, category: 'Data', color: 'bg-blue-800' },
  { name: 'AWS/Vercel', icon: Cloud, category: 'Infrastructure', color: 'bg-orange-500' },
  { name: 'Architecture', icon: Cpu, category: 'Systems', color: 'bg-slate-700' },
];

export const SkillsEcosystem = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <Badge variant="outline" className="border-klyvin-blue/20 text-klyvin-blue bg-klyvin-blue/5 px-4 py-1">
              TECH STACK
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6 tracking-tight"
          >
            Skills Ecosystem
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl leading-relaxed"
          >
            A holistic approach to building production-grade systems using 
            modern frontend architecture and robust backend foundations.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl bg-white border border-border/40 shadow-sm hover:shadow-md hover:border-klyvin-blue/20 transition-all group"
            >
              <div className={cn(
                "w-12 h-12 rounded-xl mb-4 flex items-center justify-center text-white transition-transform group-hover:rotate-6",
                skill.color
              )}>
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-1">{skill.name}</h3>
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Status Section Integrated */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-white border border-border/40 shadow-xl flex flex-col md:flex-row items-center justify-between"
        >
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center">
                <ShieldCheck className="w-8 h-8 text-klyvin-blue" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-4 border-white animate-pulse" />
            </div>
            <div>
              <h4 className="font-bold text-xl">System Status</h4>
              <p className="text-muted-foreground">All systems operational & ready for deployment.</p>
            </div>
          </div>
          <div className="flex space-x-8">
            <div className="text-center">
              <div className="text-2xl font-black text-klyvin-blue">99.9%</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-klyvin-orange">120ms</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Avg Latency</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-black text-slate-800">2026</div>
              <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Protocol</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

import { cn } from '@/lib/utils';
