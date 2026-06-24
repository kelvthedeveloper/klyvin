"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { siteInfo } from "@/lib/site-data";
import { PageHeader } from "@/components/ui/primitives";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    return e;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length) { setErrors(e); return; }
    setErrors({});
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <div className="space-y-8">
          <PageHeader
            label="Get In Touch"
            title="Let's Work Together"
            description="Have a project, job opportunity, or question? Send me a message and I'll get back to you within 24 hours."
          />

          <div className="space-y-4">
            {[
              { label: "Email", value: siteInfo.email, href: `mailto:${siteInfo.email}` },
              { label: "Location", value: siteInfo.location },
              { label: "Website", value: "klyvin.vercel.app", href: siteInfo.website },
            ].map((item) => (
              <div key={item.label} className="bg-secondary rounded-2xl px-6 py-4">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} className="font-semibold hover:text-primary transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <p className="font-semibold">{item.value}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          {sent ? (
            <div className="bg-secondary rounded-2xl p-10 text-center space-y-4">
              <CheckCircle2 size={48} className="text-primary mx-auto" />
              <h3 className="text-xl font-bold">Message Sent!</h3>
              <p className="text-sm text-muted-foreground">Thanks for reaching out. I&apos;ll reply soon.</p>
              <button onClick={() => setSent(false)} className="text-sm text-primary font-semibold hover:underline cursor-pointer">
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { id: "name", label: "Name", type: "text" },
                { id: "email", label: "Email", type: "email" },
                { id: "subject", label: "Subject", type: "text" },
              ].map((field) => (
                <div key={field.id} className="space-y-1.5">
                  <label htmlFor={field.id} className="text-sm font-semibold">{field.label}</label>
                  <input
                    id={field.id}
                    type={field.type}
                    value={form[field.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                    className="w-full px-5 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary transition-colors text-sm"
                  />
                  {errors[field.id] && <p className="text-xs text-primary">{errors[field.id]}</p>}
                </div>
              ))}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-sm font-semibold">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-5 py-3 rounded-2xl border border-border bg-background focus:outline-none focus:border-primary transition-colors text-sm resize-none"
                />
                {errors.message && <p className="text-xs text-primary">{errors.message}</p>}
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-3 pl-8 pr-2 py-2 bg-foreground text-background rounded-full font-semibold hover:bg-foreground/90 transition-colors disabled:opacity-50 cursor-pointer"
              >
                {submitting ? "Sending..." : "Send Message"}
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Send size={16} />
                </span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
