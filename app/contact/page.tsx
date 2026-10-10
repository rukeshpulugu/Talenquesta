import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/ui";
import ContactEmail from "@/components/ContactEmail";
export const metadata: Metadata = { title: "Contact Us", description: "Get in touch with the Talenquesta team." };

export default function Contact() {
  return (
    <>
      <PageHero title="Contact us" intro="Questions about programs, eligibility or applications? Reach out by email." />
      <div className="mx-auto max-w-3xl px-5 py-16">
        <div className="card flex items-center gap-4 p-6">
          <Mail className="text-cyan" aria-hidden />
          <div><h2 className="font-display font-semibold text-white">Email</h2><p className="text-mist"><ContactEmail /></p></div>
        </div>
        <p className="mt-6 text-sm text-mist">We do not use an on-site contact form, so no personal data is collected on this website. Application details are collected only through the official application form of each program.</p>
      </div>
    </>
  );
}
