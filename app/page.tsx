import Link from "next/link";
import { ArrowRight, FileText, Download, Briefcase, Zap, Terminal } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-[calc(100vh-8rem)] justify-center items-center py-16 md:py-24">
      {/* Hero Section */}
      <section className="w-full max-w-4xl px-4 flex flex-col items-center text-center space-y-8 md:space-y-12">
        
        {/* Animated Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-semibold tracking-wider uppercase animate-fade-in">
          <Terminal size={14} />
          Available for New Opportunities
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl">
          Hi, I&apos;m <span className="gradient-text">Kelvin</span>. <br />
          I build reliable, scalable, and elegant web solutions.
        </h1>

        {/* Mission Statement */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          I am a Full-Stack Developer passionate about transforming complex business challenges into production-ready software. From SaaS engines to AI integrations, I design systems built to perform.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            href="/projects"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-primary text-primary-foreground px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-primary/20 hover:bg-primary/90 transition-all cursor-pointer group"
          >
            Explore Projects
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/60 px-6 py-3 rounded-xl font-medium transition-all cursor-pointer"
          >
            Get In Touch
          </Link>

          <Link
            href="/resume"
            className="flex items-center justify-center gap-2 w-full sm:w-auto text-muted-foreground hover:text-foreground hover:bg-secondary/50 px-6 py-3 rounded-xl font-medium transition-all cursor-pointer border border-transparent hover:border-border/40"
          >
            <FileText size={18} />
            View Resume
          </Link>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="w-full max-w-5xl px-4 mt-20 md:mt-28">
        <h2 className="text-2xl font-bold text-center mb-10 md:mb-12">Area of Focus</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
              <Zap size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">SaaS & AI Platforms</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Developing modern cloud-native systems with smart AI enhancements, automated workflows, and robust integrations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-purple-500/10 text-purple-500 flex items-center justify-center mb-4">
              <Briefcase size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">E-Commerce Architecture</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Designing high-performance storefronts and scalable transactional engines configured for user conversion and speed.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col p-6 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
            <div className="w-10 h-10 rounded-lg bg-pink-500/10 text-pink-500 flex items-center justify-center mb-4">
              <Terminal size={20} />
            </div>
            <h3 className="text-lg font-bold mb-2">Developer Tools</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Creating CLI utilities, content pipelines, and scripts to improve workflows and boost development velocity.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight CTA */}
      <section className="w-full max-w-4xl px-4 mt-20 md:mt-24 text-center">
        <div className="p-8 rounded-3xl border border-border/50 bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 flex flex-col md:flex-row items-center justify-between gap-6 text-left">
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Interested in my past works?</h3>
            <p className="text-sm text-muted-foreground max-w-lg">
              Check out CommerceFlow, DevFlow, PromptForge, TeamSync, and BlogForge to see code implementation examples.
            </p>
          </div>
          <Link
            href="/projects"
            className="flex items-center gap-2 bg-foreground text-background hover:bg-foreground/90 px-5 py-3 rounded-xl font-medium transition-all shrink-0 cursor-pointer text-sm"
          >
            See Showcase
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
