"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Github, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="max-w-7xl mx-auto px-6 pt-8 pb-14 md:pt-10 md:pb-20"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-primary shadow-xl shrink-0"
        >
          <Image
            src="/profile.jpeg"
            alt="Shiva Maurya"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <div className="max-w-3xl space-y-6 text-center md:text-left">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Hi, I'm <span className="text-primary">Shiva Maurya</span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="text-lg md:text-2xl text-muted-foreground"
          >
            Full-Stack Developer • AI / Machine Learning Engineer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-muted-foreground"
          >
            Building scalable full-stack and AI-powered systems using modern
            technologies like Next.js, FastAPI, Machine Learning, and real-time
            architectures. Focused on performance, clean design, and solving
            real-world problems.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
            className="flex flex-wrap gap-3 pt-2 justify-center md:justify-start"
          >
            <Button
              className="gap-2"
              onClick={() =>
                window.open("mailto:mauryashiva060@gmail.com", "_blank")
              }
            >
              <Mail size={16} />
              Contact
            </Button>

            <Button
              variant="outline"
              className="gap-2"
              onClick={() =>
                window.open("https://github.com/MauryaShiva", "_blank")
              }
            >
              <Github size={16} />
              GitHub
            </Button>

            <Button
              variant="outline"
              className="gap-2"
              onClick={() => window.open("/resume.pdf", "_blank")}
            >
              <FileText size={16} />
              Resume
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
