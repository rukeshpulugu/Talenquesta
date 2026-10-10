import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, steps } from "@/components/ui";
export const metadata: Metadata = { title: "How It Works", description: "From exploring programs to earning a completion certificate: how Talenquesta internships work." };

export default function HowItWorks() {
  return (
    <>
      <PageHero title="How it works" intro="Eight clear steps from exploring a program to receiving your certificate." />
      <ol className="mx-auto max-w-3xl space-y-4 px-5 py-16">
        {steps.map((s, i) => (
          <li key={s} className="card flex items-center gap-5 p-5">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/50 font-display font-bold text-gold">{i + 1}</span>
            <span className="text-slate-200">{s}</span>
          </li>
        ))}
        <li className="pt-6 list-none"><Link href="/internships" className="btn-primary">Explore Internships</Link></li>
      </ol>
    </>
  );
}
