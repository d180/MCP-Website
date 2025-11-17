import React from "react";
import Link from "next/link";

type SectionCardProps = {
  label?: string;
  title: string;
  description: string;
  href?: string;
  children?: React.ReactNode;
};

export function SectionCard({
  label,
  title,
  description,
  href,
  children,
}: SectionCardProps) {
  const Wrapper: React.ComponentType<any> = href ? Link : "div";
  const wrapperProps = href
    ? {
        href,
      }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-slate-800/70 bg-slate-900/70 p-4 shadow-sm shadow-sky-900/40 transition hover:-translate-y-0.5 hover:border-sky-500/60 hover:bg-slate-900"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-sky-500/10 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

      {label && (
        <span className="inline-flex w-fit items-center rounded-full bg-sky-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-sky-300 ring-1 ring-sky-500/40">
          {label}
        </span>
      )}

      <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
      <p className="text-xs leading-relaxed text-slate-400">{description}</p>

      {children && <div className="mt-1 text-xs text-slate-300">{children}</div>}

      {href && (
        <div className="mt-1 flex items-center gap-1 text-[11px] font-medium text-sky-300">
          <span>Open</span>
          <span aria-hidden>↗</span>
        </div>
      )}
    </Wrapper>
  );
}
