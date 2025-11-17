import React from "react";

export type Step = {
  title: string;
  description: string;
  highlight?: string;
};

type StepTimelineProps = {
  eyebrow: string;
  title: string;
  steps: Step[];
};

export function StepTimeline({ eyebrow, title, steps }: StepTimelineProps) {
  return (
    <section className="rounded-2xl border border-slate-800/80 bg-slate-950/60 p-4 sm:p-6">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-base font-semibold text-slate-50 sm:text-lg">
        {title}
      </h2>

      <div className="mt-4 space-y-4">
        {steps.map((step, idx) => (
          <div key={idx} className="flex gap-3">
            <div className="mt-1 flex flex-col items-center">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-[11px] font-semibold text-slate-50 shadow shadow-sky-700/50">
                {idx + 1}
              </div>
              {idx !== steps.length - 1 && (
                <div className="mt-1 h-full w-px flex-1 bg-gradient-to-b from-sky-500/60 via-slate-700 to-transparent" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-slate-100">
                {step.title}
              </p>
              <p className="mt-1 text-[11px] leading-relaxed text-slate-400">
                {step.description}
              </p>
              {step.highlight && (
                <p className="mt-1 text-[11px] font-medium text-sky-300">
                  {step.highlight}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
