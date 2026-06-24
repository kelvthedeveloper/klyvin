"use client";

import { useState } from "react";
import { Award } from "lucide-react";
import { Certificate } from "@/lib/site-data";

export function CertificatesSection({ certificates }: { certificates: Certificate[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const spotlight = certificates[0];
  const active = certificates[activeIndex] || spotlight;

  return (
    <section className="space-y-10" id="certificates">
      <div className="space-y-2">
        <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-muted-foreground">
          What I&apos;ve earned
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.05] font-serif">
          Certificates &amp;
          <br />
          <span className="text-primary">Achievements</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mt-2">
          Continuously upskilling through industry-recognized programs spanning cloud computing,
          databases, and modern full-stack development.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Spotlight card */}
        <div className="p-8 rounded-2xl border border-primary/20 bg-primary/5 space-y-6 relative overflow-hidden">
          <div className="absolute top-4 right-4 text-[9px] font-mono uppercase tracking-widest text-primary/60 bg-primary/10 px-2 py-1 rounded">
            spotlight credential
          </div>
          <div className="flex items-center gap-2 text-primary">
            <Award size={20} />
            <span className="text-xs font-bold uppercase tracking-wider">Featured</span>
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-foreground">{active.name}</h3>
            <p className="text-sm text-muted-foreground">
              Issued by <strong className="text-foreground">{active.issuer}</strong> &bull; {active.year}
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {active.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-semibold px-2.5 py-1 rounded-md bg-background/60 border border-border/30 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-primary/10">
            <div>
              <span className="block text-2xl font-extrabold text-foreground">{certificates.length}+</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Certificates</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-foreground">3</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Cloud Certs</span>
            </div>
            <div>
              <span className="block text-2xl font-extrabold text-foreground">15+</span>
              <span className="text-[10px] uppercase tracking-wider text-muted-foreground">Skills Gained</span>
            </div>
          </div>
        </div>

        {/* Certificate list */}
        <div className="space-y-2">
          {certificates.map((cert, idx) => (
            <button
              key={cert.name}
              onClick={() => setActiveIndex(idx)}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                activeIndex === idx
                  ? "border-primary/40 bg-primary/5"
                  : "border-border/30 bg-card/30 hover:border-border/60 hover:bg-card/50"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-foreground">{cert.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {cert.issuer} &mdash; {cert.year}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/50 shrink-0">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
