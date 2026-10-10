import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/ui";
import ContactEmail from "@/components/ContactEmail";
import { siteConfig } from "@/config/site";
export const metadata: Metadata = { title: "Contact Us", description: "Contact Talenquesta by email about internship programs and applications." };

export default function Contact() {
  const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent("Talenquesta enquiry")}&body=${encodeURIComponent("Hello Talenquesta team,\n\n")}`;
  return (
    <>
      <PageHero title="Contact us" intro="Questions about programs, eligibility or applications? Send us an email." />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="card flex flex-wrap items-center justify-between gap-5 p-6">
          <div className="flex items-center gap-4">
            <Mail className="text-cyan" aria-hidden />
            <div><h2 className="font-display font-semibold text-white">Email</h2><p className="text-mist"><ContactEmail /></p></div>
          </div>
          <a href={mailto} className="btn-primary">Email us</a>
        </div>
        <p className="mt-8 font-display text-xl text-white">{siteConfig.tagline}</p>
        <p className="mt-4 text-sm text-mist">Application details are collected only through the official application form. This website has no contact form and collects no personal data.</p>
      </div>
    </>
  );
}
