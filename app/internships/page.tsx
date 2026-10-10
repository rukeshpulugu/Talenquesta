import type { Metadata } from "next";
import { programs } from "@/config/programs";
import ProgramCard from "@/components/ProgramCard";
import { PageHero } from "@/components/ui";
import ApplyButton from "@/components/ApplyButton";
export const metadata: Metadata = { title: "Internship Programs", description: "Browse 12 virtual internship programs: Data Analytics, Python, AI and ML, Cyber Security, Web Development, Java, SQL, Excel and Power BI, UI/UX, Digital Marketing, Cloud and Full Stack." };

export default function Internships() {
  return (
    <>
      <PageHero title="Internship programs" intro="Twelve project-based domains. Open any program to see its tasks, resources and requirements." />
      <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => <ProgramCard key={p.slug} p={p} />)}
      </div>
      <div className="pb-20 text-center"><ApplyButton /></div>
    </>
  );
}
