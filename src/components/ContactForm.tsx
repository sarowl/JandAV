"use client"; 

import { Send, User, Phone, Mail, MessageSquare } from "lucide-react";

export default function ContactForm() {
  // form state and email-sending logic here!
  
  return (
    <form 
      className="space-y-4" 
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Form submitted!"); 
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Name Input */}
        <div className="relative">
          <User className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input 
            placeholder="Your name" 
            className="w-full rounded-full bg-secondary py-3 pl-11 pr-5 text-sm outline-none ring-0 placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" 
          />
        </div>

        {/* Contact Number Input */}
        <div className="relative">
          <Phone className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input 
            placeholder="Contact number" 
            type="tel" 
            className="w-full rounded-full bg-secondary py-3 pl-11 pr-5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" 
          />
        </div>
      </div>

      {/* Email Input */}
      <div className="relative">
        <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input 
          placeholder="Your email" 
          type="email" 
          className="w-full rounded-full bg-secondary py-3 pl-11 pr-5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" 
        />
      </div>

      {/* Message Textarea */}
      <div className="relative">
        <MessageSquare className="absolute left-4 top-4 h-4 w-4 text-muted-foreground" />
        <textarea 
          placeholder="Your message" 
          rows={6} 
          className="w-full rounded-2xl bg-secondary py-4 pl-11 pr-5 text-sm outline-none placeholder:text-muted-foreground focus:ring-2 focus:ring-ring" 
        />
      </div>

      <button 
        type="submit" 
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#1a2614] px-6 py-4 text-white font-semibold text-primary-foreground hover:opacity-90"
      >
        Send Message <Send className="h-4 w-4" />
      </button>
    </form>
  );
}