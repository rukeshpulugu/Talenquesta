import Link from "next/link";
export default function NotFound() {
  return (
    <div className="hero-glow mx-auto max-w-xl px-5 py-32 text-center">
      <p className="font-display text-6xl font-bold text-gold">404</p>
      <h1 className="mt-4 font-display text-3xl font-bold text-white">Page not found</h1>
      <p className="mt-3 text-mist">The page you are looking for does not exist or has moved.</p>
      <div className="mt-8 flex justify-center gap-3">
        <Link href="/" className="btn-primary">Go home</Link>
        <Link href="/internships" className="btn-ghost">View internships</Link>
      </div>
    </div>
  );
}
