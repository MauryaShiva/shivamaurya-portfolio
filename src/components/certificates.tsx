"use client";

import { motion } from "framer-motion";
import {
  Award,
  Calendar,
  BarChart,
  FileText,
  ExternalLink,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ---------- Fast Animation Physics ---------- */
const fastSnap = {
  type: "spring" as const,
  stiffness: 600,
  damping: 30,
  mass: 0.8,
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: fastSnap },
};

/* ---------- Certificate Data (Sorted: Cloud, Cyber, Frontend on top) ---------- */
const certificates = [
  {
    title: "Cloud Computing Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "24 Jan 2026", // [cite: 64]
    category: "Cloud",
    color: "bg-sky-500",
    pdfUrl: "/certificate-pdf/cloud.pdf",
    previewImage: "/previews/cloud.png", // Ensure you have these screenshots in public/previews/
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "11 Sep 2025", //
    category: "Security",
    color: "bg-emerald-500",
    pdfUrl: "/certificate-pdf/cybersecurity.pdf",
    previewImage: "/previews/cybersecurity.png",
  },
  {
    title: "Frontend Web Development",
    issuer: "IBM SkillsBuild Summer Internship",
    date: "Aug 2024", // [cite: 75]
    category: "Experience",
    color: "bg-cyan-500",
    pdfUrl: "/certificate-pdf/frontend-web-dev.pdf",
    previewImage: "/previews/frontend.png",
  },
  {
    title: "Postman API Student Expert",
    issuer: "Postman",
    date: "28 Jan 2024", // [cite: 101]
    category: "API Development",
    color: "bg-orange-500",
    pdfUrl: "/certificate-pdf/postman-api.pdf",
    previewImage: "/previews/postman-api.png",
  },
  {
    title: "Python 3.4.3 Training",
    issuer: "IIT Bombay",
    date: "April 2024", // [cite: 35]
    score: "80.00%", //
    category: "Programming",
    color: "bg-blue-500",
    pdfUrl: "/certificate-pdf/python.pdf",
    previewImage: "/previews/python.png",
  },
  {
    title: "C Training",
    issuer: "IIT Bombay",
    date: "Oct 2023", // [cite: 7]
    score: "82.50%", //
    category: "Programming",
    color: "bg-slate-500",
    pdfUrl: "/certificate-pdf/c-training.pdf",
    previewImage: "/previews/c-training.png",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "03 Feb 2026", // [cite: 117]
    category: "Management",
    color: "bg-purple-500",
    pdfUrl: "/certificate-pdf/project-management.pdf",
    previewImage: "/previews/project-management.png",
  },
  {
    title: "PHP and MySQL Training",
    issuer: "IIT Bombay",
    date: "Oct 2024", // [cite: 21]
    score: "47.22%", // [cite: 22]
    category: "Web Development",
    color: "bg-indigo-500",
    pdfUrl: "/certificate-pdf/php-mysql.pdf",
    previewImage: "/previews/php-mysql.png",
  },
  {
    title: "Job Application Essentials",
    issuer: "IBM SkillsBuild",
    date: "03 Feb 2026", // [cite: 91]
    category: "Career",
    color: "bg-amber-500",
    pdfUrl: "/certificate-pdf/job-essentials.pdf",
    previewImage: "/previews/job-essentials.png",
  },
];

export function Certificates() {
  return (
    <section id="certificates" className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          className="text-6xl md:text-8xl font-black tracking-tighter italic"
        >
          VERIFIED <span className="text-primary not-italic">PROOF</span>
        </motion.h2>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((cert) => (
          <motion.div
            key={cert.title}
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="group relative flex flex-col bg-card border-2 border-muted rounded-[2.5rem] overflow-hidden transition-all hover:border-primary hover:shadow-2xl"
          >
            {/* Top Preview Image */}
            <div className="relative h-56 w-full bg-muted overflow-hidden border-b-2 border-muted">
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                <Button
                  size="sm"
                  className="rounded-full font-bold uppercase"
                  onClick={() => window.open(cert.pdfUrl, "_blank")}
                >
                  <Search className="w-4 h-4 mr-2" />
                  View PDF
                </Button>
              </div>

              <img
                src={cert.previewImage}
                alt={cert.title}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://placehold.co/600x400?text=Certificate+Preview";
                }}
              />
            </div>

            {/* Content Details */}
            <div className="p-8 flex flex-col flex-1">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {cert.category}
                </span>
                <span className="text-[10px] font-bold text-muted-foreground uppercase">
                  {cert.date}
                </span>
              </div>

              <h3 className="text-xl font-black leading-tight mb-2 uppercase italic tracking-tighter">
                {cert.title}
              </h3>
              <p className="text-sm font-bold text-muted-foreground/80 mb-6">
                {cert.issuer}
              </p>

              <div className="mt-auto space-y-4">
                {cert.score && (
                  <div className="flex items-center gap-2 text-xs font-black text-emerald-500 uppercase">
                    <BarChart className="w-4 h-4" />
                    Score: {cert.score}
                  </div>
                )}

                <Button
                  onClick={() => window.open(cert.pdfUrl, "_blank")}
                  className="w-full h-12 bg-foreground text-background font-black uppercase italic rounded-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-lg"
                >
                  <FileText className="mr-2 w-5 h-5" />
                  Full Document
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
