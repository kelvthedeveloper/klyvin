'use client';

import { Badge } from "@/components/ui/badge";
import { Play, Sparkles } from "lucide-react";

export default function PlaygroundPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <Badge variant="outline" className="border-purple-200 text-purple-500 mb-4">EXPERIMENTAL</Badge>
      <h1 className="text-5xl font-black mb-12">The <span className="text-purple-500">Playground.</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="aspect-video bg-slate-50 rounded-2xl border border-border/40 p-8 flex flex-col justify-between group hover:border-purple-500/30 transition-all cursor-pointer">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-purple-500">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-xl mb-2">Experiment #{i}</h3>
              <div className="flex items-center text-sm text-muted-foreground font-bold">
                <Play className="w-4 h-4 mr-2 fill-current" /> RUN DEMO
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
