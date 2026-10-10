import Image from "next/image";
import Link from "next/link";
import { BarChart3, ClipboardList, Layers, MessageSquare, Briefcase } from "lucide-react";
import { programs } from "@/config/programs";
import ProgramCard from "@/components/ProgramCard";
import Reveal from "@/components/Reveal";
import ApplyButton from "@/components/ApplyButton";
import { Section, steps, faqs } from "@/components/ui";

const why = [
  [Layers, "Practical learning", "Every program is built around doing real work, not just watching content."],
  [ClipboardList, "Structured tasks", "Clear, staged assignments so you always know what to do next."],
  [BarChart3, "Project development", "Build projects from start to finish and document how you did it."],
  [MessageSquare, "Feedback", "Submitted work is reviewed so you can see where to improve."],
  [Briefcase, "Portfolio building", "Finish with work you can show, explain and share."],
] as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero-glow relative overflow-hidden border-b border-line">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
          <div>
            <h1 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Learn by Doing. <span className="text-electric">Grow by Building.</span>
            </h1>
            <div className="accent-line mt-6 w-24 rounded-full" />
            <p className="mt-6 max-w-xl text-lg text-mist">
              Explore practical, project-based virtual internship programs designed to help learners build technical skills, work on meaningful assignments, and strengthen their portfolios.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/internships" className="btn-primary">Explore Internship Programs</Link>
              <Link href="/how-it-works" className="btn-ghost">How It Works</Link>
            </div>
          </div>
          <div className="mx-auto w-full max-w-md">
            <Image src="/logo.png" alt="Talenquesta logo: a stylised T with an orbiting ring" width={560} height={560} priority className="logo-fade float h-auto w-full" />
          </div>
        </div>
      </section>

      {/* About */}
      <Section title="Our learning approach: structured, practical, project-based" tone="charcoal"
        intro="Talenquesta is a virtual internship provider. We focus on structured learning, practical assignments, skill development and project-based experience, so learners finish with evidence of what they can do.">
        <Reveal>
          <Link href="/about" className="btn-ghost">About Talenquesta</Link>
        </Reveal>
      </Section>

      {/* Domains */}
      <Section id="programs" title="Internship programs" intro="Choose from 12 internship domains. Each program page lists the tasks, resources, deliverables and certificate requirements.">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <Reveal key={p.slug}><ProgramCard p={p} /></Reveal>
          ))}
        </div>
      </Section>

      {/* How it works */}
      <Section title="How it works" tone="charcoal">
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s}>
              <Reveal className="card h-full p-5">
                <span className="font-display text-sm font-bold text-gold">Step {i + 1}</span>
                <p className="mt-2 text-sm text-slate-200">{s}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* Why */}
      <Section title="Why Talenquesta">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {why.map(([Icon, t, d]) => (
            <Reveal key={t} className="card p-6">
              <Icon className="text-cyan" size={24} aria-hidden />
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{t}</h3>
              <p className="mt-2 text-sm text-mist">{d}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section title="Frequently asked questions" tone="charcoal">
        <div className="max-w-3xl space-y-3">
          {faqs.map(([q, a]) => (
            <details key={q} className="card group p-5 open:border-electric/60">
              <summary className="flex items-center justify-between font-medium text-white">
                {q}<span className="ml-4 text-gold transition-transform group-open:rotate-45" aria-hidden>+</span>
              </summary>
              <p className="mt-3 text-sm text-mist">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="hero-glow border-t border-line">
        <div className="mx-auto max-w-3xl px-5 py-24 text-center">
          <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Ready to start building?</h2>
          <p className="mt-4 text-mist">Pick a domain, read the details, then apply through the official application form. Selected applicants complete tasks, submit work for evaluation, receive feedback and, if all stated requirements are met, become eligible for a certificate.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3"><ApplyButton /><Link href="/internships" className="btn-ghost">Explore Internships</Link></div>
        </div>
      </section>
    </>
  );
}
