"use client";

import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-20 border-t bg-background/80 backdrop-blur">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-5">
          <button
            onClick={() =>
              window.open("https://github.com/MauryaShiva", "_blank")
            }
            className="p-2 rounded-lg border hover:bg-muted transition"
          >
            <Github size={18} />
          </button>

          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/shiva-maurya-14b14231b",
                "_blank",
              )
            }
            className="p-2 rounded-lg border hover:bg-muted transition"
          >
            <Linkedin size={18} />
          </button>

          <button
            onClick={() =>
              window.open("mailto:mauryashiva060@gmail.com", "_blank")
            }
            className="p-2 rounded-lg border hover:bg-muted transition"
          >
            <Mail size={18} />
          </button>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-border" />

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Shiva Maurya. All rights reserved.</p>
          <p className="mt-1">
            Full-Stack Developer • AI Engineer • Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
