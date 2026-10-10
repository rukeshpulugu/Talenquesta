import type { Metadata } from "next";
import { PageHero, Section, List } from "@/components/ui";
export const metadata: Metadata = { title: "About Us", description: "Talenquesta offers structured, project-based virtual internships." };

export default function About() {
  return (
    <>
      <PageHero title="About Talenquesta" intro="A virtual internship provider focused on structured, project-based learning." />
      <Section title="What we do">
        <div className="max-w-3xl space-y-4 text-mist">
          <p>Talenquesta offers virtual internship programs where learners work through structured tasks and build real projects. Our first programs are Data Analytics and Python, with more technology domains planned.</p>
          <p>Our approach is simple: learn a skill, apply it to a practical assignment, receive feedback, and keep the result as part of your portfolio.</p>
        </div>
      </Section>
      <Section title="What we believe" tone="charcoal">
        <List items={["Skills grow fastest when you build something real", "Clear structure and expectations help learners succeed", "Feedback turns effort into improvement", "Honesty first: we state fees, requirements and certificate conditions up front"]} />
      </Section>
      <Section title="What we do not claim">
        <p className="max-w-3xl text-mist">Talenquesta does not guarantee jobs, placements or interviews, and a certificate of completion is not an academic degree or an accreditation. Any official status or partnership will be stated here only once verified.</p>
      </Section>
    </>
  );
}
