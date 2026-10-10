export type ApplicationStatus = "open" | "closed";

/* ============================================================
   EDIT THIS FILE to control the site. No component edits needed.
   ============================================================ */

/** 1) PASTE YOUR PUBLISHED GOOGLE FORM LINK HERE (must start with https://).
 *    One form serves all 12 domains. While empty, every Apply button shows
 *    "Applications opening soon" instead of a broken link. */
export const applicationFormUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSd3TvuZxfVTrTN_fQmMBBP7bT4GMqH8gukIXTlCanqvSZmiEA/viewform?usp=publish-editor";

/** 2) Contact details */
export const contactEmail = "talenquesta.careers@gmail.com";

export const siteConfig = {
  name: "Talenquesta",
  tagline: "Learn by Doing. Grow by Building.",
  description:
    "Practical, project-based virtual internship programs that help learners build technical skills, complete meaningful assignments and strengthen their portfolios.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://talenquesta.vercel.app",
  contactEmail,
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Internships", href: "/internships" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Contact", href: "/contact" },
  ],
};

export interface ProgramSettings {
  /** "open" shows Apply Now; "closed" shows "Applications closed" for that domain. */
  status: ApplicationStatus;
  duration: string;
  fee: string;
  submission: string[];
  evaluation: string[];
  certificate: string[];
}

/** 3) Defaults used by every domain. Replace the [Editable placeholder] text once finalised. */
export const defaultSettings: ProgramSettings = {
  status: "open",
  duration: "[Editable placeholder] Program duration has not been finalised.",
  fee: "[Editable placeholder] Fee details will be confirmed on this page and in the application form before you apply. We will never add a mandatory payment after you complete the work.",
  submission: [
    "Submission method and deadlines will be shared with selected participants.",
    "[Editable placeholder] Add your final submission steps here (e.g. the form, folder or repository participants should use).",
    "Submit only your own original work.",
  ],
  evaluation: [
    "Correctness and completeness of the submitted work",
    "Quality, clarity and documentation",
    "Following task instructions and submission deadlines",
    "Originality — copied or plagiarised work is not accepted",
  ],
  certificate: [
    "Complete all required tasks and the final project",
    "Submit work by the stated deadlines",
    "Meet the evaluation criteria listed on this page",
    "[Editable placeholder] Exact thresholds will be confirmed before applications open",
    "A certificate is not a degree, accreditation, or guarantee of employment or placement",
  ],
};

/** 4) Per-domain overrides and availability. Add a slug here to change only that domain, e.g.
 *    "cyber-security": { status: "closed" }
 *  A domain with `available: false` in config/programs.ts shows as Coming Soon instead. */
export const programOverrides: Record<string, Partial<ProgramSettings>> = {
  // "data-analytics": { duration: "[your duration]" },
};

export const getSettings = (slug: string): ProgramSettings => ({ ...defaultSettings, ...programOverrides[slug] });
