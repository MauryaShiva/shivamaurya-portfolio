import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Shiva Maurya | Full Stack & AI Developer",
    template: "%s | Shiva Maurya",
  },
  description:
    "Portfolio of Shiva Maurya — Full Stack Developer and AI Engineer specializing in Next.js, FastAPI, Machine Learning, Real-Time Systems, and scalable web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {/* Theme */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* IMPORTANT — THIS FIXES FOOTER */}
          <main className="flex-1 flex flex-col min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
