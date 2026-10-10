import { siteConfig } from "@/config/site";

export default function ContactEmail() {
  const email = siteConfig.contactEmail;
  return <a className="hover:text-white" href={`mailto:${email}`}>{email}</a>;
}
