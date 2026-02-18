"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Github,
  LayoutDashboard,
  UserCircle,
  ShieldCheck,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ---------- Types ---------- */

type ProjectLink = {
  label: string;
  url: string;
  icon?: React.ReactNode;
};

type Project = {
  title: string;
  description: string;
  github: string;
  images: string[];
  tags: string[];
  featured?: boolean;
  links?: ProjectLink[];
};

/* ---------- Animation Constants ---------- */

const fastSpring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 20,
};

/* ---------- Sub-Component: Professional Gallery ---------- */

function ProjectGallery({
  images,
  title,
}: {
  images: string[];
  title: string;
}) {
  const [index, setIndex] = useState(0);

  // Optional: Auto-cycle images on hover or after interval
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full aspect-16/10 group/gallery overflow-hidden bg-muted">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="absolute inset-0"
        >
          <Image
            src={images[index]}
            alt={`${title} ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots - Updated Styling */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={(e) => {
              e.preventDefault();
              setIndex(idx);
            }}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === idx
                ? "w-8 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/80",
            )}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-60" />
    </div>
  );
}

/* ---------- Data ---------- */

const projects: Project[] = [
  {
    title: "Supply Chain AI Dashboard",
    description:
      "Enterprise SCM platform with Supabase Auth, AI demand forecasting, and real-time WebSocket sync for inventory management.",
    github: "https://github.com/MauryaShiva",
    images: [
      "/projects/supplychain1.png",
      "/projects/supplychain-2.png",
      "/projects/supplychain-3.png",
    ],
    tags: ["FastAPI", "React", "Supabase", "Groq AI"],
    links: [
      {
        label: "Admin",
        url: "https://supply-chain-ai-dashboard-admi.vercel.app",
        icon: <LayoutDashboard size={14} />,
      },
      {
        label: "Customer",
        url: "https://supply-chain-ai-dashboard-customer.vercel.app",
        icon: <UserCircle size={14} />,
      },
    ],
  },
  {
    title: "QuickChat - Real-Time App",
    description:
      "MERN stack suite with WebRTC P2P calls, Socket.IO presence, and a context-aware AI assistant.",
    github: "https://github.com/MauryaShiva/QuickChat",
    images: [
      "/projects/quickchat-1.png",
      "/projects/quickchat-2.png",
      "/projects/quickchat-3.png",
    ],
    tags: ["MongoDB", "Express", "React", "WebRTC"],
    links: [
      { label: "Live Demo", url: "https://quick-chat-opal-nu.vercel.app/" },
    ],
  },
  {
    title: "GenreLab - AI Classification",
    description:
      "PyTorch CNN engine that classifies media genres in real-time with local-first IndexedDB storage.",
    github: "https://github.com/MauryaShiva/media-genre-classifier",
    images: ["/projects/genrelab-1.png", "/projects/genrelab-2.png"],
    tags: ["PyTorch", "FastAPI", "Librosa", "CNN"],
  },
  {
    title: "GymX Fitness Website",
    description:
      "Offline-first React app with 1,300+ local exercises and Fuse.js smart search.",
    github: "https://github.com/MauryaShiva/GymX-Fitness",
    images: [
      "/projects/gymx-1.png",
      "/projects/gymx-2.png",
      "/projects/gymx-3.png",
    ],
    tags: ["React", "Tailwind", "Fuse.js", "Vite"],
    links: [{ label: "Live Demo", url: "https://gym-x-fitness.vercel.app/" }],
  },
  {
    title: "Sentiment Analysis WebApp",
    description:
      "FastAPI tool using RoBERTa Transformers and WebSockets for real-time CSV data analysis.",
    github: "https://github.com/MauryaShiva/sentiment-analysis-webapp",
    images: ["/projects/sentiment-1.png", "/projects/sentiment-2.png"],
    tags: ["Hugging Face", "FastAPI", "WebSockets", "Recharts"],
  },
];

/* ---------- Main Component ---------- */

export function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-28"
    >
      <div className="flex flex-col mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={fastSpring}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground mb-3"
        >
          Project Showcase
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...fastSpring, delay: 0.1 }}
          className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl"
        >
          A collection of my latest works and creations, built with precision
          and modern tech stacks.
        </motion.p>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...fastSpring, delay: i * 0.1 }}
            className="group flex flex-col h-full rounded-3xl border border-muted bg-card overflow-hidden hover:border-primary/40 transition-all duration-500 shadow-sm hover:shadow-xl"
          >
            {/* Gallery Top */}
            <ProjectGallery images={project.images} title={project.title} />

            {/* Content Bottom */}
            <div className="flex flex-col grow p-6">
              {project.featured && (
                <div className="flex items-center gap-1.5 text-primary text-[10px] font-bold tracking-widest uppercase mb-2">
                  <ShieldCheck size={14} /> Featured Project
                </div>
              )}

              <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href={project.github}
                  target="_blank"
                  className={cn(
                    project.links && project.links.length > 1
                      ? "col-span-2"
                      : "col-span-1",
                  )}
                >
                  <Button
                    variant="outline"
                    className="w-full h-10 border-muted hover:bg-secondary text-xs font-bold rounded-xl"
                  >
                    <Github size={16} className="mr-2" /> Code
                  </Button>
                </Link>

                {project.links?.map((link) => (
                  <Link
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    className="col-span-1"
                  >
                    <Button className="w-full h-10 bg-primary hover:bg-primary/90 text-xs font-bold rounded-xl shadow-none">
                      {link.icon ? (
                        <span className="mr-2">{link.icon}</span>
                      ) : (
                        <ExternalLink size={14} className="mr-2" />
                      )}
                      {link.label}
                    </Button>
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
