"use client";
export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="mx-auto max-w-xl px-5 py-32 text-center">
      <h1 className="font-display text-3xl font-bold text-white">Something went wrong</h1>
      <p className="mt-3 text-mist">The page failed to load. Try again, and if it keeps happening, contact us.</p>
      <button onClick={reset} className="btn-primary mt-8">Try again</button>
    </div>
  );
}
