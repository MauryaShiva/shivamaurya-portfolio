"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------- Fixed Animation Config ---------- */

const fastSnap = {
  type: "spring" as const, // Added 'as const' to fix the error
  stiffness: 600,
  damping: 30,
  mass: 0.8,
};

const popInVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -100 : 100,
    scale: 0.5,
    filter: "blur(10px)",
  }),
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: fastSnap,
  },
};

/* ---------- Types ---------- */

type ContactMethod = {
  label: string;
  value: string;
  icon: React.ReactNode;
  actionLabel: string;
  href: string;
  color: string;
  brandColor: string;
};

/* ---------- Data ---------- */

const contactMethods: ContactMethod[] = [
  {
    label: "WhatsApp",
    value: "+91 72498 98729",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
      </svg>
    ),
    actionLabel: "WhatsApp",
    href: "https://wa.me/917249898729",
    color: "hover:bg-[#25D366]/10",
    brandColor: "text-[#25D366]",
  },
  {
    label: "Gmail",
    value: "mauryashiva060@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L12 9.573l8.073-6.08c1.618-1.214 3.927-.059 3.927 1.964z" />
      </svg>
    ),
    actionLabel: "Email Me",
    href: "mailto:mauryashiva060@gmail.com",
    color: "hover:bg-[#EA4335]/10",
    brandColor: "text-[#EA4335]",
  },
  {
    label: "GitHub",
    value: "MauryaShiva",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
    actionLabel: "Source Code",
    href: "https://github.com/MauryaShiva",
    color: "hover:bg-zinc-500/10",
    brandColor: "text-foreground",
  },
  {
    label: "LinkedIn",
    value: "Shiva Maurya",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    actionLabel: "Let's Connect",
    href: "https://www.linkedin.com/in/shiva-maurya-14b14231b",
    color: "hover:bg-[#0077B5]/10",
    brandColor: "text-[#0077B5]",
  },
];

/* ---------- Main Component ---------- */

export function Contact() {
  return (
    <section
      id="contact"
      className="relative max-w-7xl mx-auto px-6 py-24 overflow-visible"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-125 bg-primary/10 blur-[150px] -z-10 rounded-full" />

      <div className="mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={fastSnap}
          className="text-4xl md:text-5xl font-bold tracking-tight"
        >
          Get in <span className="text-primary">Touch</span>
        </motion.h2>

        <p className="mt-3 text-muted-foreground max-w-lg">
          Feel free to reach out for collaboration, opportunities, or any
          professional inquiries.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contactMethods.map((method, index) => (
          <motion.div
            key={method.label}
            custom={index}
            variants={popInVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            whileHover={{
              scale: 1.02,
              y: -5,
              transition: { duration: 0.1 },
            }}
            className={cn(
              "group relative flex flex-col h-full rounded-3xl border-2 border-muted bg-card p-6 transition-colors duration-200 shadow-2xl",
              method.color,
            )}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5, type: "spring" }}
              className={cn(
                "w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 shadow-lg",
                method.brandColor,
              )}
            >
              {method.icon}
            </motion.div>

            <div className="mb-8">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground opacity-50">
                {method.label}
              </span>
              <h3 className="text-xl font-bold truncate mt-1">
                {method.value}
              </h3>
            </div>

            <Button
              onClick={() => window.open(method.href, "_blank")}
              className="mt-auto w-full h-14 bg-foreground text-background hover:bg-primary hover:text-white rounded-2xl font-black text-lg transition-all active:scale-90"
            >
              {method.actionLabel}
              <ArrowUpRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
