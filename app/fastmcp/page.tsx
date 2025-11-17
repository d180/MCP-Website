import { StepTimeline } from "../components/StepTimeline";

export default function FastMCPPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <section className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-400">
          Flow 1 · Developer mode
        </p>

        <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
          Use PromptSuggestion via FastMCP (cloud)
        </h1>

        <p className="max-w-2xl text-sm sm:text-[15px] leading-relaxed text-slate-300">
          This path is for people using LLMs with{" "}
          <span className="font-medium text-sky-200">MCP developer mode</span>.
          You connect the hosted MCP URL once, then call the tool whenever you
          want a better follow-up prompt.
        </p>

        {/* GitHub Button */}
        <div className="pt-3">
          <a
            href="https://github.com/d180/FastMCP---Prompt-Suggestion.git"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-slate-800 hover:border-slate-600"
          >
            {/* GitHub Icon */}
            <svg
              viewBox="0 0 16 16"
              className="h-4 w-4 fill-slate-200"
              aria-hidden="true"
            >
              <path d="M8 0C3.58 0 0 3.73 0 8.33c0 3.68 2.29 6.8 5.47 7.9.4.08.55-.18.55-.39v-1.35c-2.23.5-2.7-1.1-2.7-1.1-.36-.96-.89-1.22-.89-1.22-.73-.52.06-.51.06-.51.81.06 1.24.86 1.24.86.72 1.27 1.88.9 2.34.69.07-.54.28-.9.51-1.11-1.78-.21-3.65-.92-3.65-4.08 0-.9.31-1.63.82-2.2-.08-.21-.36-1.06.08-2.2 0 0 .67-.22 2.2.84a7.2 7.2 0 0 1 2-.28c.68 0 1.36.1 2 .28 1.53-1.06 2.2-.84 2.2-.84.44 1.14.16 1.99.08 2.2.51.57.82 1.3.82 2.2 0 3.17-1.88 3.86-3.67 4.07.29.26.54.77.54 1.56v2.32c0 .21.15.47.55.39C13.71 15.13 16 12 16 8.33 16 3.73 12.42 0 8 0z" />
            </svg>

            FastMCP GitHub Repo
          </a>
        </div>
      </section>

      {/* Timeline */}
      <StepTimeline
        eyebrow="Connection steps"
        title="Connect the MCP server in your LLM"
        steps={[
          {
            title: "Turn on developer mode",
            description:
              "Open your LLM’s settings → Apps / connectors → Advanced settings → enable developer mode support.",
          },
          {
            title: "Create a new MCP app",
            description:
              "Back in Apps / Connectors, click “Create” (top-right). Choose any name and description you like.",
            highlight:
              'In the URL field, paste: https://PromptSuggestion.fastmcp.app/mcp',
          },
          {
            title: "No auth needed",
            description:
              "In the authentication section, choose “No authentication”, accept the checkbox, and confirm.",
          },
          {
            title: "Refresh & attach the tool",
            description:
              "Refresh your chat page. When you start a new conversation, use the + button → More to attach your new MCP tool.",
          },
        ]}
      />

      {/* JSON Config */}
      <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 sm:p-5">
        <h2 className="text-sm sm:text-base font-semibold text-slate-50">
          JSON config (for MCP-aware clients that use a config file)
        </h2>
        <p className="mt-1 text-sm text-slate-400">
          Some tools let you declare HTTP MCP servers in a JSON config. Here’s a
          generic example:
        </p>

        <pre className="mt-3 overflow-x-auto rounded-xl bg-slate-950/90 p-3 text-xs sm:text-sm text-sky-100">
{`{
  "mcpServers": {
    "prompt-suggestion": {
      "type": "http",
      "url": "https://PromptSuggestion.fastmcp.app/mcp",
      "authentication": "none"
    }
  }
}`}
        </pre>
      </section>

      {/* How to Call */}
      <section className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 sm:p-5">
        <h2 className="text-sm sm:text-base font-semibold text-slate-50">
          How to call the tool in chat
        </h2>

        <p className="mt-1 text-sm text-slate-300">
          Once the MCP server is attached to the conversation, just ask your
          model something like:
        </p>

        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
          <li>
            “Use the prompt-suggestion tool to give me a better follow-up prompt based on the last answer.”
          </li>
          <li>
            “Call the MCP tool to suggest a sharper prompt using our recent conversation and my feedback.”
          </li>
        </ul>

        <p className="mt-2 text-xs sm:text-sm text-slate-400">
          The model will call the MCP tool, receive one high-quality prompt, and
          show it back in chat for you to use.
        </p>
      </section>
    </div>
  );
}
