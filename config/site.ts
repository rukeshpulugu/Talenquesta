export type ApplicationStatus = "open" | "opening-soon" | "closed";

export const siteConfig = {
  name: "Talenquesta",
  tagline: "Learn by Doing. Grow by Building.",
  description:
    "Practical, project-based virtual internship programs that help learners build technical skills, complete meaningful assignments and strengthen their portfolios.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  /** Add your real contact email here. While empty, the site shows "coming soon" instead of a fake address. */
  contactEmail: "",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Internships", href: "/internships" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
  ],
};

/**
 * PROGRAM SETTINGS — edit this block when you are ready.
 * - applyUrl: paste the Google Form link (must start with https://). Leave "" until you have it.
 * - status: "open" shows the Apply button (only if applyUrl is set); "opening-soon" / "closed" never do.
 * - duration, fee, certificateTerms: shown to learners BEFORE they apply. Finalise before opening applications.
 */
export interface ProgramSettings {
  applyUrl: string;
  status: ApplicationStatus;
  duration: string;
  fee: string;
  certificateTerms: string;
}

export const programSettings: Record<string, ProgramSettings> = {
  "data-analytics": {
    applyUrl: "",
    status: "opening-soon",
    duration: "To be announced (placeholder)",
    fee: "The first batch is intended to be free. Final fee details will be confirmed here before applications open. Future batches may differ.",
    certificateTerms:
      "A certificate is issued only if all stated requirements are met (see Certificate eligibility). Any certificate-related cost, if one ever applies, will be stated here before you apply.",
  },
  python: {
    applyUrl: "",
    status: "opening-soon",
    duration: "To be announced (placeholder)",
    fee: "The first batch is intended to be free. Final fee details will be confirmed here before applications open. Future batches may differ.",
    certificateTerms:
      "A certificate is issued only if all stated requirements are met (see Certificate eligibility). Any certificate-related cost, if one ever applies, will be stated here before you apply.",
  },
};
