import type { ReactNode } from "react";
import { BarChart3, Brain, Code2, Database, FileSpreadsheet, Globe } from "lucide-react";
import type { Program } from "@/config/programs";

export function ProgramIcon({ name, size = 24 }: { name: Program["icon"]; size?: number }) {
  const map = { chart: BarChart3, code: Code2, database: Database, sheet: FileSpreadsheet, brain: Brain, globe: Globe };
  const I = map[name];
  return <I size={size} aria-hidden />;
}

export function Section({ id, title, intro, children, tone = "ink" }: { id?: string; title: string; intro?: string; children: ReactNode; tone?: "ink" | "charcoal" }) {
  return (
    <section id={id} className={tone === "charcoal" ? "bg-charcoal" : ""}>
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="max-w-2xl font-display text-3xl font-bold text-white md:text-4xl">{title}</h2>
        {intro && <p className="mt-4 max-w-2xl text-mist">{intro}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

export function PageHero({ title, intro }: { title: string; intro: string }) {
  return (
    <div className="hero-glow border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <h1 className="font-display text-4xl font-bold text-white md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-mist">{intro}</p>
      </div>
    </div>
  );
}

export function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 text-mist">
      {items.map((t) => (
        <li key={t} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden />{t}</li>
      ))}
    </ul>
  );
}

export const steps = [
  "Explore available programs",
  "Read the program details and eligibility",
  "Apply using the official application form",
  "Receive selection confirmation, if selected",
  "Complete structured tasks and projects",
  "Submit your work for review",
  "Receive feedback",
  "Receive a completion certificate if all stated requirements are met",
];

export const faqs = [
  ["Who can apply?", "Eligibility is listed on each program page. Final eligibility details are confirmed before applications open."],
  ["How long is a program?", "Durations are shown on each program page. They are currently placeholders until the first batch is finalised."],
  ["Does it cost anything?", "The first batch is intended to be free. Fees for every program are disclosed on its page before you apply, and future programs may differ. We will never add a mandatory payment after you have completed the work."],
  ["How do I submit tasks?", "Task instructions and submission steps are shared with selected participants once a batch begins."],
  ["How is my work evaluated?", "Work is reviewed against the criteria listed on the program page, and you receive feedback."],
  ["Will I get a certificate?", "A completion certificate is issued if you meet all the stated requirements for that program. Certificates are not a guarantee of employment or placement."],
  ["Where can I get support?", "Use the contact details on the Contact page. A support email will be published there when it is available."],
];
