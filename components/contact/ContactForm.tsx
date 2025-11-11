"use client";

import { FormEvent, useState } from "react";
import { Send, User, Mail, Building, MessageSquare, AlignLeft, Phone, MapPin } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<keyof FormState, string>>({ name: "", email: "", company: "", subject: "", message: "" });
  const [status, setStatus] = useState<string>("");

  const validate = (): boolean => {
    const newErrors: Record<keyof FormState, string> = { name: "", email: "", company: "", subject: "", message: "" };
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("");
    if (!validate()) return;
    setStatus("✅ Message sent successfully.");
    setForm({ name: "", email: "", company: "", subject: "", message: "" });
  };

  const handleChange = (field: keyof FormState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [field]: event.target.value }));
    setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const renderInput = (
    label: string,
    field: keyof FormState,
    Icon: typeof User,
    placeholder: string,
    type: "text" | "email" = "text"
  ) => (
    <label className="space-y-2 text-sm text-white/70">
      {label}
      <div className={`flex items-center gap-2 rounded-2xl border px-4 py-3 ${errors[field] ? "border-red-400" : "border-white/10"}`}>
        <Icon className="h-4 w-4 text-white/50" />
        <input
          type={type}
          value={form[field]}
          onChange={handleChange(field)}
          placeholder={placeholder}
          className="w-full bg-transparent text-white placeholder:text-white/40 focus:outline-none"
        />
      </div>
      {errors[field] && <p className="text-xs text-red-400">{errors[field]}</p>}
    </label>
  );

  return (
    <section id="form" className="py-20 fade-up" data-animate>
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div className="fade-up space-y-3" data-animate>
          <p className="text-xs uppercase tracking-[0.3em] text-[#93c5fd]">Send us a Message</p>
          <h2 className="text-3xl font-semibold text-white">Fill out the form below and we&rsquo;ll get back to you as soon as possible.</h2>
          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            {renderInput("Full Name*", "name", User, "John Doe")}
            {renderInput("Email Address*", "email", Mail, "john@example.com", "email")}
            {renderInput("Company", "company", Building, "Adverttize Pvt Ltd")}
            {renderInput("Subject*", "subject", MessageSquare, "Project Inquiry")}
            <label className="space-y-2 text-sm text-white/70">
              Message*
              <div className={`flex items-start gap-2 rounded-2xl border px-4 py-3 ${errors.message ? "border-red-400" : "border-white/10"}`}>
                <AlignLeft className="mt-1 h-4 w-4 text-white/50" />
                <textarea
                  value={form.message}
                  onChange={handleChange("message")}
                  placeholder="Tell us about your project"
                  className="h-32 w-full resize-none bg-transparent text-white placeholder:text-white/40 focus:outline-none"
                />
              </div>
              {errors.message && <p className="text-xs text-red-400">{errors.message}</p>}
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-[#2563EB] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:scale-[1.01]"
            >
              Send Message
              <Send className="h-4 w-4" />
            </button>
            {status && <p className="text-sm text-green-400">{status}</p>}
          </form>
        </div>
        <div className="fade-up rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 via-[#05070f] to-[#0f172a] p-6 text-white shadow-[0_25px_90px_rgba(4,5,12,0.6)]" data-animate>
          <h3 className="text-xl font-semibold">Need a quicker response?</h3>
          <p className="mt-2 text-white/70">
            Email us at <span className="text-white">contact@adverttize.com</span> or call <span className="text-white">+91 72004 46204</span>. We typically respond within 2 hours.
          </p>
          <div className="mt-6 space-y-3 text-sm text-white/70">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-[#93c5fd]" /> contact@adverttize.com</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-[#93c5fd]" /> +91 72004 46204</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-[#93c5fd]" /> Spaces Inspire Hub, Mumbai</p>
          </div>
        </div>
      </div>
    </section>
  );
}
