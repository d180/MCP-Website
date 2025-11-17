"use client";

import Link from "next/link";
import { StepTimeline } from "../components/StepTimeline";

export default function ExtensionPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
          Flow 2 · Browser UX
        </p>
        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
          Use PromptSuggestion via Chrome extension
        </h1>
        <p className="max-w-2xl text-sm sm:text-[15px] leading-relaxed text-slate-300">
          This flow is for people who want Smart Dislike behavior directly
          inside a browser chat, without toggling developer mode or touching
          memory settings. Everything runs locally through your own MCP server.
        </p>

        {/* GitHub buttons */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:items-center">
          <Link
            href="https://github.com/d180/PromptSuggestion-Chrome-Extension.git"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow hover:bg-slate-800 transition-colors"
          >
            Chrome Extension UI · GitHub
          </Link>
          <Link
            href="https://github.com/d180/PromptSuggestion-Claude-Desktop.git"
            target="_blank"
            className="inline-flex items-center justify-center rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-50 shadow hover:bg-slate-800 transition-colors"
          >
            Local MCP Server · GitHub
          </Link>
        </div>
      </section>

      {/* Concept timeline */}
      <StepTimeline
        eyebrow="Concept"
        title="What the extension does"
        steps={[
          {
            title: "Overlay a 'Smart Dislike' button",
            description:
              "The extension injects a small Smart Dislike button near existing thumbs-down controls in your chat UI.",
          },
          {
            title: "Grab recent messages",
            description:
              "When clicked, it reads a small window of the last user + assistant messages from the DOM.",
          },
          {
            title: "Call your local MCP server",
            description:
              "It sends those messages plus your optional comment to your local MCP endpoint and waits for a single best prompt.",
          },
          {
            title: "Insert the new prompt",
            description:
              "The extension drops the suggested prompt into your chat input box. You can tweak it or just press Enter.",
          },
        ]}
      />

      {/* High-level setup */}
      <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 sm:p-5">
        <h2 className="text-sm sm:text-base font-semibold text-slate-50">
          High-level setup (local MCP + Chrome extension)
        </h2>
        <ol className="mt-3 list-decimal space-y-3 pl-5 text-sm text-slate-300">
          <li>
            <span className="font-semibold">Clone and run the local MCP server</span>{" "}
            (TypeScript / Claude-Desktop version):
            <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-3 text-xs sm:text-sm text-slate-100">
{`git clone https://github.com/d180/PromptSuggestion-Claude-Desktop.git
cd PromptSuggestion-Claude-Desktop
npm install

# Add your Gemini key
echo "GEMINI_API_KEY=your_key_here" > .env

# Start the MCP server
npx tsx src/index.ts`}
            </pre>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              By default, the server listens on{" "}
              <span className="font-mono text-[13px] text-sky-300">
                http://localhost:3333/dev/analyze
              </span>
              , which is what the extension expects.
            </p>
          </li>

          <li>
            <span className="font-semibold">Install the Chrome extension:</span>
            <pre className="mt-2 overflow-x-auto rounded-md bg-slate-900 p-3 text-xs sm:text-sm text-slate-100">
{`git clone https://github.com/d180/PromptSuggestion-Chrome-Extension.git`}
            </pre>
            <p className="mt-1 text-xs sm:text-sm text-slate-400">
              In Chrome, go to{" "}
              <span className="font-mono">chrome://extensions</span>, enable{" "}
              <span className="font-semibold">Developer mode</span>, click{" "}
              <span className="font-mono">Load unpacked</span>, and select the{" "}
              <span className="font-mono">PromptSuggestion-Chrome-Extension</span>{" "}
              folder.
            </p>
          </li>

          <li>
            <span className="font-semibold">Open your LLM chat in the browser</span>{" "}
            (for example, ChatGPT). Ask a question and wait for the assistant’s reply.
          </li>

          <li>
            When the answer isn’t good enough, click the{" "}
            <span className="font-semibold">💡 Smart Dislike</span> button on that
            assistant message. The extension will:
            <ul className="mt-1 list-disc pl-5 space-y-1 text-sm">
              <li>Send the recent messages to your local MCP server</li>
              <li>Receive one improved, first-person prompt</li>
              <li>Show it in a floating panel</li>
            </ul>
          </li>

          <li>
            Click <span className="font-semibold">“Use as prompt”</span> to insert
            the suggestion into the chat input. You can edit it slightly if you want,
            then press Enter to send.
          </li>
        </ol>
        <p className="mt-3 text-xs sm:text-sm text-slate-400">
          The extension never stores your conversations. It only forwards a small
          recent context window to your <span className="font-mono">localhost</span>{" "}
          MCP server so it can rewrite the prompt for you.
        </p>
      </section>
    </div>
  );
}
