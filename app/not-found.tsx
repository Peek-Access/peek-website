import Link from "next/link";
import { EyeIcon } from "@/components/EyeIcon";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <EyeIcon className="h-16 w-16" />
      <h1 className="text-3xl font-bold tracking-tight">Nothing to see here.</h1>
      <p className="max-w-md text-muted">
        This page doesn’t exist. Head back to the homepage, or check the
        project on GitHub.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="rounded-lg bg-forest px-5 py-3 font-semibold text-white"
        >
          Back home
        </Link>
        <a
          href="https://github.com/Peek-Access/Peek"
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-line px-5 py-3 font-semibold"
        >
          GitHub ↗
        </a>
      </div>
    </main>
  );
}
