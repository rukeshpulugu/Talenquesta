import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProgram, programs } from "@/config/programs";
import { programSettings } from "@/config/site";
import ApplyButton from "@/components/ApplyButton";
import { List, PageHero } from "@/components/ui";

export const dynamicParams = false;
export function generateStaticParams() { return programs.map((p) => ({ slug: p.slug })); }
export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const p = getProgram(params.slug);
  return p ? { title: p.title, description: p.summary } : {};
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
          <p className="mt-6 text-mist">This program is not available yet. Details will be published here when it is genuinely ready.</p>
          <Link href="/internships" className="btn-ghost mt-8">Back to all programs</Link>
        </div>
      </>
    );
  }

  const s = programSettings[p.slug];
  const blocks: [string, string[] | undefined][] = [
    ["Skills covered", p.skills], ["Learning objectives", p.objectives], ["Prerequisites", p.prerequisites],
    ["Task structure", p.tasks], ["Deliverables", p.deliverables], ["Evaluation criteria", p.evaluation], ["Certificate eligibility", p.certificate],
  ];

  return (
    <>
      <PageHero title={p.title} intro={p.overview ?? p.summary} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_340px]">
        <div className="space-y-10">
          {blocks.map(([t, items]) => items && (
            <section key={t}>
              <h2 className="mb-4 font-display text-2xl font-semibold text-white">{t}</h2>
              <List items={items} />
            </section>
          ))}
          <p className="rounded-lg border border-gold/30 bg-gold/5 p-4 text-sm text-mist">
            Some details on this page are placeholders and have not been finalised. They will be confirmed before applications open.
          </p>
        </div>
        <aside className="h-fit space-y-5 rounded-xl border border-line bg-panel p-6 lg:sticky lg:top-24">
          <div>
            <h2 className="font-display text-sm font-semibold text-white">Duration</h2>
            <p className="mt-1 text-sm text-mist">{s.duration}</p>
          </div>
          <div>
            <h2 className="font-display text-sm font-semibold text-white">Fees</h2>
            <p className="mt-1 text-sm text-mist">{s.fee}</p>
          </div>
          <div>
            <h2 className="font-display text-sm font-semibold text-white">Certificate terms</h2>
            <p className="mt-1 text-sm text-mist">{s.certificateTerms}</p>
          </div>
          <ApplyButton slug={p.slug} className="w-full" />
        </aside>
      </div>
    </>
  );
}
