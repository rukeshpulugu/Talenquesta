import Image from "next/image";
import Link from "next/link";

/** Shows the supplied logo emblem (cropped, not stretched) next to a live-text wordmark. */
export default function Logo() {
  return (
    <Link href="/" aria-label="Talenquesta home" className="flex items-center gap-3">
      <span className="relative block h-11 w-11 shrink-0 overflow-hidden rounded-lg">
        <Image src="/logo.png" alt="" width={64} height={64} priority className="absolute max-w-none" style={{ left: -10.7, top: -4 }} />
      </span>
      <span className="font-display text-lg font-bold tracking-wide">
        <span className="text-slate-200">TALEN</span>
        <span className="text-electric">QUESTA</span>
      </span>
    </Link>
  );
}
