"use client";

import { useState } from "react";
import { Mail, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!form.subject.trim()) newErrors.subject = "Subject is required.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:py-20 space-y-12">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Contact</h1>
        <p className="text-muted-foreground text-lg max-w-2xl">
          Have an interesting project, job opportunity, or just want to chat? Drop me a message below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12">
        
        {/* Info panel */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm space-y-6">
            <h2 className="text-lg font-bold border-b border-border/30 pb-2">Connect</h2>
            
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-3">
                <Mail className="text-primary mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-foreground text-xs">Email</h4>
                  <a href="mailto:kelvin@example.com" className="hover:text-primary transition-colors">kelvin@example.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-primary mt-0.5 shrink-0" size={18} />
                <div>
                  <h4 className="font-semibold text-foreground text-xs">Location</h4>
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/30 flex items-center gap-3">
              <a
                href="https://github.com/kelvthedeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border/20 transition-all cursor-pointer"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com/in/kelvthedeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border/20 transition-all cursor-pointer"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="https://twitter.com/kelvthedeveloper"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 border border-border/20 transition-all cursor-pointer"
                title="Twitter"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Form Panel */}
        <div className="md:col-span-3">
          {isSubmitted ? (
            <div className="p-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 text-center space-y-4">
              <CheckCircle2 size={44} className="text-emerald-500 mx-auto" />
              <h3 className="text-lg font-bold text-foreground">Message Sent Successfully!</h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-sm mx-auto">
                Thank you for reaching out. I have received your message and will get back to you as soon as possible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="text-xs text-primary font-semibold hover:underline cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label htmlFor="name" className="text-xs font-semibold text-foreground">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border/40 bg-card/45 backdrop-blur-sm text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {errors.name && <p className="text-rose-500 text-xs">{errors.name}</p>}
                </div>

                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-foreground">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-border/40 bg-card/45 backdrop-blur-sm text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                  {errors.email && <p className="text-rose-500 text-xs">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-xs font-semibold text-foreground">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border/40 bg-card/45 backdrop-blur-sm text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
                {errors.subject && <p className="text-rose-500 text-xs">{errors.subject}</p>}
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-xs font-semibold text-foreground">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-border/40 bg-card/45 backdrop-blur-sm text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
                {errors.message && <p className="text-rose-500 text-xs">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 disabled:bg-primary/50 px-5 py-3 rounded-xl text-sm font-medium shadow-sm transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="h-4 w-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>

    </div>
  );
}
