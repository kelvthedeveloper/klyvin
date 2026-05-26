'use client';

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MessageSquare, Send } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-32">
      <div className="max-w-4xl mx-auto">
        <Badge variant="outline" className="border-klyvin-orange/20 text-klyvin-orange mb-4">CONNECT</Badge>
        <h1 className="text-5xl font-black mb-12">Let's build <br/><span className="text-klyvin-orange">together.</span></h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Have a project in mind or just want to chat about engineering? 
              I'm always open to discussing new opportunities and technical challenges.
            </p>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-klyvin-blue">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="text-lg font-bold">hello@klyvin.com</div>
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-klyvin-orange">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Discord</div>
                  <div className="text-lg font-bold">klyvin_dev</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-[2rem] border border-border/40 shadow-xl">
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Full Name</label>
                <Input placeholder="John Doe" className="h-14 rounded-xl border-border/60 bg-slate-50/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Email Address</label>
                <Input placeholder="john@example.com" className="h-14 rounded-xl border-border/60 bg-slate-50/50" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Message</label>
                <Textarea placeholder="Tell me about your project..." className="min-h-32 rounded-xl border-border/60 bg-slate-50/50 p-4" />
              </div>
              <Button className="w-full bg-klyvin-blue hover:bg-klyvin-blue/90 text-white h-14 rounded-xl text-lg font-bold">
                Send Message <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
