import { siteConfig } from "@/config/site";

export default function ContactEmail() {
  const email = siteConfig.contactEmail;
  if (!email) return <span>Contact email: coming soon</span>;
  return <a className="hover:text-white" href={`mailto:${email}`}>{email}</a>;
}
