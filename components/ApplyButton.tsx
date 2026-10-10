import { ArrowUpRight } from "lucide-react";
import { applicationFormUrl, getSettings } from "@/config/site";

/** Opens the central Google Form. `slug` optional: pass it to respect that domain's status. */
export default function ApplyButton({ slug, className = "", label = "Apply Now" }: { slug?: string; className?: string; label?: string }) {
  const status = slug ? getSettings(slug).status : "open";
  const hasUrl = /^https:\/\//.test(applicationFormUrl);

  if (status === "closed" || !hasUrl) {
    return (
      <span role="status" className={`inline-flex items-center justify-center rounded-lg border border-line bg-panel px-5 py-3 text-sm font-medium text-mist ${className}`}>
        {status === "closed" ? "Applications closed" : "Applications opening soon"}
      </span>
    );
  }
  return (
    <a href={applicationFormUrl} target="_blank" rel="noopener noreferrer" className={`btn-gold ${className}`}>
      {label} <ArrowUpRight size={16} aria-hidden />
      <span className="sr-only"> (opens the application form in a new tab)</span>
    </a>
  );
}
