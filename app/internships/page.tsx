import type { Metadata } from "next";
import { programs } from "@/config/programs";
import ProgramCard from "@/components/ProgramCard";
import { PageHero } from "@/components/ui";
export const metadata: Metadata = { title: "Internship Programs", description: "Browse Talenquesta's virtual internship programs: Data Analytics and Python, with more coming soon." };

export default function Internships() {
  return (
    <>
      <PageHero title="Internship programs" intro="Data Analytics and Python are our initial programs. Other domains are Coming Soon." />
      <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => <ProgramCard key={p.slug} p={p} />)}
      </div>
    </>
  );
}
