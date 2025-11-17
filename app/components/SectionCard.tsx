// app/components/SectionCard.tsx
import Link from "next/link";
import React from "react";

type SectionCardProps = {
  label: string;
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
  const card = (
    <div className="group flex h-full flex-col rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 transition hover:border-sky-500/60 hover:bg-slate-900/80">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-sky-400">
        {label}
      </p>
      <h3 className="mt-2 text-base font-semibold text-slate-50">{title}</h3>
      <p className="mt-1 text-sm leading-relaxed text-slate-300">
        {description}
      </p>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block h-full">
        {card}
      </Link>
    );
  }

  return card;
}
