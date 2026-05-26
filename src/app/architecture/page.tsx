'use client';

import { Badge } from "@/components/ui/badge";
import { Layers, Server, Shield, Zap } from "lucide-react";

export default function ArchitecturePage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <Badge variant="outline" className="border-klyvin-blue/20 text-klyvin-blue mb-4">SYSTEMS</Badge>
      <h1 className="text-5xl font-black mb-12">Core <span className="text-klyvin-blue">Architecture.</span></h1>
      
      <div className="space-y-24">
        {[
          { title: "Frontend Edge", icon: Zap, desc: "Next.js 15, React Server Components, and Edge Runtime for sub-100ms LCP." },
          { title: "State Orchestration", icon: Layers, desc: "Advanced state management using XState and TanStack Query for resilient data flows." },
          { title: "Infrastructure", icon: Server, desc: "Multi-region AWS deployments with Terraform and automated CI/CD pipelines." },
          { title: "Security Layers", icon: Shield, desc: "End-to-end encryption, OAuth2 implementation, and SOC2 compliant practices." }
        ].map((item, i) => (
          <div key={i} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className={i % 2 === 0 ? "order-1" : "order-1 md:order-2"}>
              <div className="w-16 h-16 bg-klyvin-blue/5 text-klyvin-blue rounded-2xl flex items-center justify-center mb-6">
                <item.icon className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6">{item.title}</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
            <div className={`aspect-video bg-slate-50 rounded-3xl border border-border/40 flex items-center justify-center ${i % 2 === 0 ? "order-2" : "order-2 md:order-1"}`}>
              <span className="text-slate-300 font-black uppercase tracking-widest text-sm">System Diagram Placeholder</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
