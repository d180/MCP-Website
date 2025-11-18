import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Analytics } from "@vercel/analytics/react";   // ⬅️ ADD THIS

export const metadata: Metadata = {
  title: "PromptSuggestion MCP | Smart Dislike for LLMs",
  description:
    "An MCP server that analyzes disliked LLM responses and generates a sharper follow-up prompt to get you closer to the result you want.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {/* background glow */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-gradient-to-br from-sky-500/10 via-slate-900 to-violet-500/10" />
        <div className="pointer-events-none fixed -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-500/20 blur-3xl" />

        <div className="mx-auto flex min-h-screen max-w-5xl flex-col px-4 pb-10 pt-6 sm:px-6 lg:px-8">
          {/* NAVBAR */}
          <header className="mb-8 flex items-center justify-between gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-sky-500/10 ring-1 ring-sky-500/40">
                <span className="text-lg">✨</span>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-tight">
                  PromptSuggestion
                </p>
                <p className="text-xs text-slate-400">
                  Smart Dislike · MCP Server
                </p>
              </div>
            </Link>

            <nav className="flex items-center gap-3 text-xs sm:text-sm">
              <Link
                href="/fastmcp"
                className="rounded-full px-3 py-1 text-slate-300 transition hover:bg-slate-800 hover:text-slate-50"
              >
                FastMCP / Dev Mode
              </Link>
              <Link
                href="/extension"
                className="rounded-full px-3 py-1 text-slate-300 transition hover:bg-slate-800 hover:text-slate-50"
              >
                Chrome Extension
              </Link>
              <Link
                href="/claude"
                className="rounded-full px-3 py-1 text-slate-300 transition hover:bg-slate-800 hover:text-slate-50"
              >
                Claude Desktop
              </Link>
            </nav>
          </header>

          {/* PAGE CONTENT */}
          <main className="flex-1">{children}</main>

          {/* FOOTER */}
          <footer className="mt-10 border-t border-slate-800/80 pt-4 text-xs text-slate-500">
            <p>
              Built around the idea that{" "}
              <span className="font-medium text-sky-300">
                one great follow-up prompt
              </span>{" "}
              is better than five meh ones.
            </p>
          </footer>
        </div>

        <Analytics />   {/* ⬅️ ADD THIS */}
      </body>
    </html>
  );
}
