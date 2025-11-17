import { StepTimeline } from "../components/StepTimeline";

export default function ClaudePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
          Flow 3 · Local tooling
        </p>

        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
          Use PromptSuggestion with Claude Desktop
        </h1>

        <p className="max-w-2xl text-sm sm:text-[15px] leading-relaxed text-slate-200">
          This option is for people who like wiring{" "}
          <span className="font-medium text-sky-200">local MCP servers</span>{" "}
          into Claude Desktop. It runs fully on your machine using a small
          TypeScript MCP server.
        </p>

        {/* GitHub button */}
        <div className="pt-3">
          <a
            href="https://github.com/d180/PromptSuggestion-Claude-Desktop.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:border-slate-600"
          >
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 fill-slate-200"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.73 0 8.33c0 3.68 2.29 6.8 5.47 7.9.4.08.55-.18.55-.39v-1.35c-2.23.5-2.7-1.1-2.7-1.1-.36-.96-.89-1.22-.89-1.22-.73-.52.06-.51.06-.51.81.06 1.24.86 1.24.86.72 1.27 1.88.9 2.34.69.07-.54.28-.9.51-1.11-1.78-.21-3.65-.92-3.65-4.08 0-.9.31-1.63.82-2.2-.08-.21-.36-1.06.08-2.2 0 0 .67-.22 2.2.84a7.2 7.2 0 0 1 2-.28c.68 0 1.36.1 2 .28 1.53-1.06 2.2-.84 2.2-.84.44 1.14.16 1.99.08 2.2.51.57.82 1.3.82 2.2 0 3.17-1.88 3.86-3.67 4.07.29.26.54.77.54 1.56v2.32c0 .21.15.47.55.39C13.71 15.13 16 12 16 8.33 16 3.73 12.42 0 8 0z" />
            </svg>
            Claude Desktop GitHub Repo
          </a>
        </div>
      </section>

      {/* Timeline – TypeScript / Claude Desktop flow */}
      <StepTimeline
        eyebrow="Local TypeScript server"
        title="Wire PromptSuggestion into Claude Desktop"
        steps={[
          {
            title: "Clone the Claude Desktop repo",
            description:
              "Clone the TypeScript MCP server repo (PromptSuggestion-Claude-Desktop) into a folder on your machine.",
          },
          {
            title: "Install dependencies with npm",
            description:
              "From the project folder, run `npm install` to install all required packages.",
          },
          {
            title: "Add your Gemini API key",
            description:
              "Create a .env file with GEMINI_API_KEY, or set GEMINI_API_KEY in the Claude config env block.",
          },
          {
            title: "Register the MCP server in Claude",
            description:
              "Edit claude_desktop_config.json so Claude knows how to launch `npx tsx src/stdio.ts` with your key.",
          },
        ]}
      />

      {/* Claude config snippet */}
      <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 sm:p-5">
        <h2 className="text-sm sm:text-base font-semibold text-slate-50">
          Claude Desktop config snippet
        </h2>

        <p className="mt-1 text-sm text-slate-300">
          Edit your Claude config file, for example:
          <span className="font-mono text-[13px] text-sky-300">
            {" "}
            ~/Library/Application Support/Claude/claude_desktop_config.json
          </span>{" "}
          (macOS) and add:
        </p>

        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950/90 p-3 text-xs sm:text-sm text-sky-100">
{`{
  "mcpServers": {
    "prompt-suggestion": {
      "command": "npx",
      "args": [
        "tsx",
        "/absolute/path/to/PromptSuggestion-Claude-Desktop/src/stdio.ts"
      ],
      "env": {
        "GEMINI_API_KEY": "YOUR_API_KEY_HERE"
      }
    }
  }
}`}
        </pre>

        <p className="mt-2 text-xs sm:text-sm text-slate-300">
          Replace{" "}
          <span className="font-mono text-[13px] text-sky-300">
            /absolute/path/to/PromptSuggestion-Claude-Desktop
          </span>{" "}
          with the actual folder path on your machine, and insert your real
          Gemini API key. Then restart Claude Desktop so it picks up the new
          MCP configuration.
        </p>

        <p className="mt-2 text-xs sm:text-sm text-slate-300">
          Once loaded, you can attach{" "}
          <span className="font-medium text-sky-200">prompt-suggestion</span> to
          a conversation and ask Claude to call it whenever you need a cleaner,
          higher-quality prompt.
        </p>
      </section>

      {/* How to invoke */}
      <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 sm:p-5">
        <h2 className="text-sm sm:text-base font-semibold text-slate-50">
          How to use it inside Claude
        </h2>
        <p className="mt-1 text-sm text-slate-300">
          In a conversation where the tool is attached, you can say things like:
        </p>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            “Use the prompt-suggestion tool to rewrite this into a better prompt.”
          </li>
          <li>
            “Call the MCP tool to give me one improved prompt based on this chat.”
          </li>
        </ul>
        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          Claude will call your local MCP server, receive one best prompt, and
          show it so you can send it as your next message.
        </p>
      </section>
    </div>
  );
}
