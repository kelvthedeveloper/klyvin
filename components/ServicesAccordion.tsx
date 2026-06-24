"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Service } from "@/lib/site-data";
import { ArrowButton, SectionLabel } from "@/components/ui/primitives";

export function ServicesAccordion({
  services,
  showViewAll = false,
}: {
  services: Service[];
  showViewAll?: boolean;
}) {
  const [expanded, setExpanded] = useState("02");

  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
          <div className="space-y-3">
            <SectionLabel>My Specialization</SectionLabel>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              Services I Provide
            </h2>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed self-end">
            From frontend polish to full-stack architecture and AI integration — I help founders and
            teams ship production-ready software that scales with their ambitions.
          </p>
        </div>

        <div className="space-y-3">
          {services.map((service) => {
            const isOpen = expanded === service.id;

            return (
              <div key={service.id}>
                <button
                  onClick={() => setExpanded(isOpen ? "" : service.id)}
                  className={`w-full flex items-center justify-between px-6 sm:px-8 py-5 sm:py-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                    isOpen
                      ? "bg-foreground text-background"
                      : "bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  <span className="text-base sm:text-lg font-semibold">
                    {service.id}. {service.title}
                  </span>
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full shrink-0 transition-colors ${
                      isOpen ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path
                        d={isOpen ? "M3 7H11" : "M3 11L11 3M11 3H5M11 3V9"}
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="bg-foreground text-background rounded-2xl mt-3 p-6 sm:p-8">
                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                          {service.image && (
                            <div className="relative w-full md:w-48 h-40 md:h-auto shrink-0 rounded-xl overflow-hidden">
                              <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                                sizes="192px"
                              />
                            </div>
                          )}
                          <div className="flex-1 space-y-4">
                            <div className="flex flex-wrap gap-2">
                              {service.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/10 text-white/80 border border-white/10"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                            <p className="text-sm text-white/70 leading-relaxed">{service.description}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {showViewAll && (
          <div className="flex justify-center mt-10">
            <ArrowButton href="/services" label="View All Services" variant="primary" />
          </div>
        )}
      </div>
    </section>
  );
}
