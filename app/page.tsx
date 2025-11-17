import Link from "next/link";
import { SectionCard } from "./components/SectionCard";
import { StepTimeline } from "./components/StepTimeline";

export default function HomePage() {
  return (
    <div className="space-y-10">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-800/70 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-10 bottom-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

        <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
          <div className="flex-1 space-y-4">
            <p className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-3 py-1 text-[12px] font-medium text-sky-100">
              <span className="text-sm">🧠</span>
              <span>PromptSuggestion · Smart Dislike MCP Server</span>
            </p>

            <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl">
              Turn a <span className="text-sky-300">thumbs down</span> into a sharper prompt.
            </h1>

            <p className="max-w-xl text-[15px] leading-relaxed text-slate-200">
              This MCP server reads the conversation behind a disliked LLM response,
              identifies what went wrong, and gives you{" "}
              <span className="font-semibold text-sky-200">one focused follow-up prompt</span>{" "}
              you can send immediately.
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <Link
                href="/fastmcp"
                className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-1.5 text-sm font-semibold text-slate-950 shadow shadow-sky-500/60 transition hover:bg-sky-400"
              >
                Use with Dev Mode LLMs <span aria-hidden>↗</span>
              </Link>
              <Link
                href="/extension"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-sm font-medium text-slate-100 transition hover:border-sky-500/70 hover:text-sky-100"
              >
                Chrome extension flow
              </Link>
              <Link
                href="/claude"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/70 px-4 py-1.5 text-sm font-medium text-slate-100 transition hover:border-sky-500/70 hover:text-sky-100"
              >
                Claude desktop setup
              </Link>
            </div>
          </div>

          <div className="mt-4 flex-1 sm:mt-0">
            <div className="relative mx-auto max-w-sm rounded-2xl border border-slate-800 bg-slate-950/80 p-4 shadow-lg shadow-sky-900/50">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                How it feels in chat
              </p>
              <div className="mt-3 space-y-2 rounded-xl bg-slate-900/80 p-3 text-[12px]">
                <div className="rounded-lg bg-slate-800/80 p-2 text-slate-200">
                  Assistant:{" "}
                  <span className="text-slate-300">
                    “Docker is kind of like a whale for your code lol”
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400">You:</span>
                  <span className="rounded-full bg-slate-800/70 px-2 py-1 text-[11px] text-slate-200">
                    👎 Smart Dislike
                  </span>
                </div>
                <div className="rounded-lg border border-sky-500/40 bg-sky-500/5 p-2">
                  <p className="text-[11px] font-semibold text-sky-200">
                    Suggested prompt:
                  </p>
                  <p className="mt-1 text-[12px] text-slate-100">
                    Explain what Docker is and what problem it solves, using a simple analogy.
                    Then give me two concrete examples of how a beginner would use it.
                  </p>
                </div>
              </div>
              <p className="mt-3 text-[12px] text-slate-500">
                The MCP server always returns{" "}
                <span className="font-medium text-sky-300">one best prompt</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

{/* VIDEO SECTION */}
<section className="rounded-2xl p-4 sm:p-5 space-y-3">
  <h2 className="text-lg font-semibold text-slate-50 sm:text-xl">
    Watch the Demo
  </h2>
  <p className="text-sm text-slate-300 sm:text-[15px]">
    A quick preview showing how Smart Dislike turns a bad answer into a
    perfect follow-up prompt.
  </p>

  <div className="overflow-hidden rounded-xl border border-slate-800">
    <div className="aspect-video">
      <iframe
        className="h-full w-full"
        src="https://www.youtube.com/embed/KaCyum58HP0"
        title="PromptSuggestion Demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</section>


      {/* FEATURES */}
      <section className="grid gap-4 sm:grid-cols-3">
        <SectionCard
          label="Core idea"
          title="One solid follow-up prompt"
          description="Instead of five vague suggestions, you get one carefully rewritten prompt tuned to your last request."
        />
        <SectionCard
          label="Context aware"
          title="Understands the chat"
          description="You pass recent messages + an optional comment. The server reads the dynamic and fixes what went wrong."
        />
        <SectionCard
          label="Plug & play"
          title="Works wherever MCP works"
          description="FastMCP cloud, Chrome extension, or local Claude Desktop setup."
        />
      </section>

      {/* THREE FLOWS OVERVIEW */}
        <section className="grid gap-4 md:grid-cols-3">
          <SectionCard
            label="For builders"
            title="FastMCP / Dev mode"
            description="Connect the hosted MCP server URL in your LLM's developer mode, then call the tool whenever you need a better prompt."
            href="/fastmcp"
          />
          <SectionCard
            label="Everyday chat"
            title="Chrome extension"
            description="Adds a Smart Dislike button on top of the normal thumbs-down in the browser, without touching the model UI."
            href="/extension"
          />
          <SectionCard
            label="Local workflow"
            title="Claude desktop"
            description="Run the MCP server locally and wire it into Claude desktop for fully local experimentation."
            href="/claude"
          />
        </section>

      {/* SIMPLE HOW IT WORKS */}
      <StepTimeline
        eyebrow="How PromptSuggestion thinks"
        title="Three quick steps from 👎 to a better prompt"
        steps={[
          {
            title: "1. Capture the moment of frustration",
            description:
              "You dislike an answer and pass a small window of recent messages + optional comment.",
            highlight: "No need to explain everything again.",
          },
          {
            title: "2. Analyze intent vs. reply",
            description:
              "It infers what you really wanted and why the assistant’s response fell short.",
          },
          {
            title: "3. Return a sharper prompt",
            description:
              "You get one clean, first-person prompt plus a small summary + confidence score.",
          },
        ]}
      />
    </div>
  );
}
