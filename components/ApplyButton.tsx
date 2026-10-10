import { ArrowUpRight } from "lucide-react";
import { programSettings } from "@/config/site";

/** Opens the program's Google Form. Falls back to a non-clickable notice if no valid URL / not open. */
export default function ApplyButton({ slug, className = "" }: { slug: string; className?: string }) {
  const s = programSettings[slug];
  const ready = !!s && s.status === "open" && /^https:\/\//.test(s.applyUrl);

  if (!ready) {
    const label = s?.status === "closed" ? "Applications closed" : "Applications opening soon";
    return (
      <span role="status" className={`inline-flex items-center justify-center rounded-lg border border-line bg-panel px-5 py-3 text-sm font-medium text-mist ${className}`}>
        {label}
      </span>
    );
  }
  return (
    <a href={s.applyUrl} target="_blank" rel="noopener noreferrer" className={`btn-gold ${className}`}>
      Apply Now <ArrowUpRight size={16} aria-hidden />
      <span className="sr-only"> (opens the application form in a new tab)</span>
    </a>
  );
}
