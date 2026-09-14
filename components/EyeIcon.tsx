export function EyeIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true">
      <rect width="100" height="100" rx="24" fill="#081c10" />
      <ellipse cx="50" cy="50" rx="42" ry="24" fill="#27ff72" />
      <circle cx="50" cy="50" r="17" fill="#081c10" />
    </svg>
  );
}
