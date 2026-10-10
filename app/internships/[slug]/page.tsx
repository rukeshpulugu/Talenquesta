import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram, programs } from "@/config/programs";
import { getSettings } from "@/config/site";
import ApplyButton from "@/components/ApplyButton";
import { List, PageHero, ProgramIcon } from "@/components/ui";

export const dynamicParams = false;
export function generateStaticParams() { return programs.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProgram(params.slug);
  return p ? { title: `${p.title} Internship`, description: p.summary } : {};
}

export default function ProgramPage({ params }: { params: { slug: string } }) {
  const p = getProgram(params.slug);
  if (!p) notFound();

  if (!p.available) {
    return (
      <>
        <PageHero title={p.title} intro={p.summary} />
        <div className="mx-auto max-w-3xl px-5 py-16">
          <span className="rounded-full bg-line px-3 py-1 text-xs font-medium text-mist">Coming Soon</span>
          <p className="mt-6 text-mist">This program is not available yet.</p>
          <Link href="/internships" className="btn-ghost mt-8">Back to all programs</Link>
        </div>
      </>
    );
  }

  const s = getSettings(p.slug);
  const blocks: [string, string[]][] = [
    ["Learning objectives", p.objectives], ["Skills covered", p.skills], ["Prerequisites", p.prerequisites],
    ["Structured task list", p.tasks], ["Learning resources", p.resources], ["Expected deliverables", p.deliverables],
    ["Submission instructions", s.submission], ["Evaluation criteria", s.evaluation], ["Certificate eligibility", s.certificate],
  ];

  return (
    <>
      <PageHero title={p.title} intro={p.overview} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_340px]">
        <div className="space-y-10">
          <section>
            <h2 className="mb-4 font-display text-2xl font-semibold text-white">Program overview</h2>
            <p className="text-mist">{p.overview}</p>
          </section>
          {blocks.map(([t, items]) => (
            <section key={t}>
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">{t}</h2>
              <List items={items} />
              {t === "Learning resources" && <p className="mt-3 text-xs text-mist">Suggested starting points. Names only; confirm they suit your batch before sharing.</p>}
            </section>
          ))}
          <p className="rounded-lg border border-gold/30 bg-gold/5 p-4 text-sm text-mist">
            Items marked [Editable placeholder] have not been finalised yet and will be confirmed before you apply.
          </p>
        </div>
        <aside className="h-fit space-y-5 rounded-xl border border-line bg-panel p-6 lg:sticky lg:top-24">
          <span className="inline-flex rounded-lg border border-electric/40 p-2.5 text-cyan"><ProgramIcon name={p.icon} /></span>
          <div><h2 className="font-display text-sm font-semibold text-white">Program duration</h2><p className="mt-1 text-sm text-mist">{s.duration}</p></div>
          <div><h2 className="font-display text-sm font-semibold text-white">Fees</h2><p className="mt-1 text-sm text-mist">{s.fee}</p></div>
          <p className="text-xs text-mist">Select “{p.title}” in the application form.</p>
          <ApplyButton slug={p.slug} className="w-full" />
        </aside>
      </div>
    </>
  );
}
