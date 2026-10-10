export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <div className="accent-line w-40 rounded-full" />
      <span className="sr-only">Loading</span>
    </div>
  );
}
