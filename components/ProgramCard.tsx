import Link from "next/link";
import type { Program } from "@/config/programs";
import { ProgramIcon } from "./ui";

export default function ProgramCard({ p }: { p: Program }) {
  return (
    <Link
      href={`/internships/${p.slug}`}
      className="card group flex h-full flex-col p-6"
    >
      <div className="flex items-start justify-between">
        <span className={`rounded-lg border p-2.5 ${p.available ? "border-electric/40 text-cyan" : "border-line text-mist"}`}>
          <ProgramIcon name={p.icon} />
        </span>
        {!p.available && <span className="rounded-full bg-line px-3 py-1 text-xs font-medium text-mist">Coming Soon</span>}
      </div>
      <h3 className="mt-5 font-display text-xl font-semibold text-white">{p.title}</h3>
      <p className="mt-2 flex-1 text-sm text-mist">{p.summary}</p>
      <span className="mt-5 text-sm font-medium text-electric group-hover:text-cyan">
        View program details
      </span>
    </Link>
  );
}
