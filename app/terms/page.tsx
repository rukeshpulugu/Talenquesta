import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Terms and Conditions", description: "Terms for using Talenquesta and its programs." };

const sections: [string, string][] = [
  ["Programs", "Talenquesta programs are virtual, project-based learning experiences. Program details, durations and schedules are published on each program page and may be updated before a batch begins."],
  ["Fees", "Any fees are stated on the program page before you apply. We will not introduce a mandatory payment after you have completed the work."],
  ["Selection", "Applying does not guarantee selection. Selected applicants are notified using the details they provided."],
  ["Certificates", "A completion certificate is issued only when the requirements stated for that program are met. It is not an academic qualification or accreditation."],
  ["No guarantees", "Talenquesta does not guarantee employment, placement, interviews or any specific outcome."],
  ["Original work", "Submitted work must be your own. Plagiarised or copied work may be rejected and may lead to removal from the program."],
  ["Changes", "We may update these terms and will post changes on this page."],
];

export default function Terms() {
  return (
    <>
      <PageHero title="Terms and Conditions" intro="Plain-language terms for using this website and joining a program." />
      <div className="mx-auto max-w-3xl space-y-8 px-5 py-16">
        {sections.map(([t, d]) => (<section key={t}><h2 className="font-display text-xl font-semibold text-white">{t}</h2><p className="mt-2 text-mist">{d}</p></section>))}
        <p className="text-sm text-gold">Template notice: have these terms reviewed against the laws that apply to you before launch.</p>
      </div>
    </>
  );
}
