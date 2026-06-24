"use client";

import { useState } from "react";
import Image from "next/image";
import { CheckCircle2, Layers, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Service, serviceHighlights } from "@/lib/site-data";
import { ArrowButton, SectionLabel } from "@/components/ui/primitives";

export function ServicesAccordion({
  services,
  showViewAll = false,
  compact = false,
}: {
  services: Service[];
  showViewAll?: boolean;
  compact?: boolean;
}) {
  const [activeId, setActiveId] = useState(services[1]?.id || services[0]?.id);
  const active = services.find((s) => s.id === activeId) || services[0];

  return (
    <section className={compact ? "py-12 sm:py-16" : "py-14 sm:py-20"}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-12 mb-8 sm:mb-10">
          <div className="space-y-3">
            <SectionLabel>My Specialization</SectionLabel>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight">
              Services built for founders & product teams
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed lg:pt-8">
            From UI polish to full-stack architecture, SaaS billing, and AI features — I help you
            ship production-ready software with clear scope, fast iteration, and maintainable code.
          </p>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {serviceHighlights.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-border/70 bg-secondary/50 px-4 py-3 sm:px-5 sm:py-4 text-center sm:text-left"
            >
              <p className="text-xl sm:text-2xl font-bold text-primary">{item.value}</p>
              <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Main panel */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,340px)_1fr] gap-4 lg:gap-6">
          {/* Service list */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0 snap-x snap-mandatory lg:snap-none">
            {services.map((service) => {
              const isActive = active.id === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveId(service.id)}
                  className={`snap-start shrink-0 lg:shrink w-full min-w-[240px] lg:min-w-0 text-left rounded-2xl border px-4 py-4 transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/15"
                      : "border-border bg-secondary/60 hover:bg-secondary hover:border-border"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <p className={`text-[10px] font-bold tracking-widest uppercase ${isActive ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                        {service.id}
                      </p>
                      <p className="text-sm sm:text-base font-semibold leading-snug">{service.title}</p>
                      {!compact && (
                        <p className={`text-xs leading-relaxed line-clamp-2 ${isActive ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                          {service.summary}
                        </p>
                      )}
                    </div>
                    <span
                      className={`flex h-8 w-8 items-center justify-center rounded-full shrink-0 ${
                        isActive ? "bg-primary-foreground/15 text-primary-foreground" : "bg-background text-foreground"
                      }`}
                    >
                      <Layers size={14} />
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="rounded-3xl border border-border bg-foreground text-background overflow-hidden"
            >
              <div className="p-6 sm:p-8 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-2 flex-1">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/70">
                      <Sparkles size={12} />
                      {active.title}
                    </div>
                    <p className="text-lg sm:text-xl font-semibold leading-snug">{active.summary}</p>
                    <p className="text-sm text-white/70 leading-relaxed">{active.description}</p>
                  </div>
                  {active.image && (
                    <div className="relative h-28 w-full sm:h-32 sm:w-32 shrink-0 rounded-2xl overflow-hidden border border-white/10">
                      <Image
                        src={active.image}
                        alt={active.title}
                        fill
                        className="object-cover object-top"
                        sizes="128px"
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {active.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/85 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2 border-t border-white/10">
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      What you get
                    </p>
                    <ul className="space-y-2.5">
                      {active.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-white/75">
                          <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/50">
                      Best for
                    </p>
                    <p className="text-sm text-white/75 leading-relaxed rounded-2xl bg-white/5 border border-white/10 p-4">
                      {active.idealFor}
                    </p>
                    <ArrowButton href="/contact" label="Discuss this service" variant="primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {showViewAll && (
          <div className="flex justify-center mt-8 sm:mt-10">
            <ArrowButton href="/services" label="Explore All Services" variant="light" />
          </div>
        )}
      </div>
    </section>
  );
}
