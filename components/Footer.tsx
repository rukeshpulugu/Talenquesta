import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import ContactEmail from "./ContactEmail";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Image src="/logo.png" alt="Talenquesta logo" width={160} height={160} className="logo-fade -ml-4" />
          <p className="mt-2 max-w-xs text-sm text-mist">{siteConfig.tagline}</p>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold text-white">Explore</h2>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            {siteConfig.nav.map((l) => (
              <li key={l.href}><Link className="hover:text-white" href={l.href}>{l.label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="font-display text-sm font-semibold text-white">Contact and legal</h2>
          <ul className="mt-4 space-y-2 text-sm text-mist">
            <li><ContactEmail /></li>
            <li><Link className="hover:text-white" href="/privacy">Privacy Policy</Link></li>
            <li><Link className="hover:text-white" href="/terms">Terms and Conditions</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-mist">
        © {new Date().getFullYear()} Talenquesta. All rights reserved.
      </div>
    </footer>
  );
}
