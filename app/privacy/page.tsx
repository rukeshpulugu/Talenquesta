import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Privacy Policy", description: "How Talenquesta handles personal information." };

const sections: [string, string][] = [
  ["This website", "This website does not collect personal data through forms or accounts. Hosting providers may process standard technical logs (such as IP address) to deliver the site."],
  ["Application forms", "When you apply, you submit information through a Google Form linked from the program page. We ask only for information needed to assess and manage your application, such as name, email and relevant background. Google's own privacy policy applies to Google Forms."],
  ["How we use information", "To review applications, communicate with applicants and participants, evaluate submitted work and issue completion certificates."],
  ["Sharing", "We do not sell personal information. We share it only with service providers needed to run the programs, or where the law requires."],
  ["Your choices", "You can ask us to access, correct or delete your information by emailing the address on the Contact page."],
  ["Changes", "We may update this policy and will post changes on this page."],
];

export default function Privacy() {
  return (
    <>
      <PageHero title="Privacy Policy" intro="We collect only what we need, and we explain why." />
      <div className="mx-auto max-w-3xl space-y-8 px-5 py-16">
        {sections.map(([t, d]) => (<section key={t}><h2 className="font-display text-xl font-semibold text-white">{t}</h2><p className="mt-2 text-mist">{d}</p></section>))}
        <p className="text-sm text-gold">Template notice: have this policy reviewed against the laws that apply to you before launch.</p>
      </div>
    </>
  );
}
