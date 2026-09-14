import { Header } from "@/components/Header";
import { FeatureDemo } from "@/components/FeatureDemo";
import { EyeIcon } from "@/components/EyeIcon";

const REPO = "https://github.com/Peek-Access/Peek";

const pillars = [
  {
    num: "01",
    title: "Follow",
    body: "Tab through any app, or hover with the mouse, and hear the name, role and state of what you’ve reached — via native Windows UI Automation.",
  },
  {
    num: "02",
    title: "Explore",
    body: "Browse a window’s full accessibility tree, not just what’s under the cursor.",
  },
  {
    num: "03",
    title: "Understand",
    body: "OCR reads text when there’s nothing else to go on. Optional, opt-in AI can describe the screen when you want more.",
  },
];

const footerLinks = [
  { href: "#features", label: "Features" },
  { href: `${REPO}/releases/latest`, label: "Download" },
  { href: `${REPO}/blob/main/docs/USER_GUIDE.md`, label: "User guide" },
  { href: `${REPO}/issues`, label: "Issues" },
  { href: `${REPO}/discussions`, label: "Discussions" },
  { href: `${REPO}/blob/main/LICENSE`, label: "License" },
  { href: `${REPO}/blob/main/LICENSING_AND_SUPPORT.md`, label: "Licensing & support" },
  { href: REPO, label: "Source code ↗" },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-5 top-[-100px] z-30 rounded bg-white p-3 shadow focus:top-3"
      >
        Skip to content
      </a>
      <Header />

      <main id="main">
        {/* Hero */}
        <section className="bg-gradient-to-br from-[#f7faf8] via-[#f7faf8] to-[#edf7f0] px-6 py-16 sm:px-10 sm:py-20">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.07fr_1fr] lg:gap-16">
            <div>
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[2px] text-accent before:h-0.5 before:w-6 before:bg-current">
                Open source · Windows
              </div>
              <h1 className="mt-6 text-[44px] font-bold leading-[1.07] tracking-tight sm:text-[56px] lg:text-[65px]">
                Not just a
                <br />
                screen reader.
                <br />
                <span className="text-accent">
                  Your screen.
                  <br />
                  Your way.
                </span>
              </h1>
              <p className="mt-6 max-w-[460px] text-lg leading-relaxed text-muted">
                A local-first accessibility assistant for Windows — the
                windows, processes and UI structure behind every control,
                not just the words on screen.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={`${REPO}/releases/latest`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-forest px-6 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  Download for Windows <span aria-hidden="true">↓</span>
                </a>
                <a
                  href={REPO}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#b9cdc0] px-6 py-4 text-base font-semibold transition-transform hover:-translate-y-0.5"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
              <p className="mt-5 text-sm text-muted">
                Free & open source <b className="px-2 font-medium text-[#92a79a]">·</b>{" "}
                GPL-3.0 <b className="px-2 font-medium text-[#92a79a]">·</b> Windows x64
              </p>
            </div>

            <FeatureDemo />
          </div>
        </section>

        {/* Principles */}
        <div className="mx-auto max-w-[1200px] px-6 sm:px-10">
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-3 border-b border-line py-6 text-sm text-muted">
            <span>
              <strong className="mr-2 text-ink">Local-first</strong>
              Speech runs on your device
            </span>
            <span>
              <strong className="mr-2 text-ink">Your choice</strong>
              AI assistance is opt-in
            </span>
            <span>
              <strong className="mr-2 text-ink">Made to be shared</strong>
              GPL-3.0 open source
            </span>
          </div>
        </div>

        {/* Features */}
        <section
          id="features"
          className="mx-auto max-w-[1200px] px-6 py-16 sm:px-10 sm:py-20"
        >
          <h2 className="mb-10 text-[32px] font-bold tracking-tight sm:text-[38px]">
            Go beyond the words.
          </h2>

          <div className="grid gap-8 sm:grid-cols-3">
            {pillars.map((f) => (
              <article key={f.num} className="border-t border-line pt-6">
                <span className="font-mono text-[13px] text-accent">
                  {f.num}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">
                  {f.title}
                </h3>
                <p className="mt-2 text-base text-muted">{f.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-[1200px] px-6 py-9 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-6 border-t border-line pt-8 sm:flex-row sm:items-center">
          <a href="#" className="flex items-center gap-3 text-xl font-bold">
            <EyeIcon className="h-8 w-8" />
            Peek
          </a>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {footerLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.href.startsWith("#") ? undefined : "_blank"}
                rel={l.href.startsWith("#") ? undefined : "noreferrer"}
                className="hover:underline"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
        <p className="mt-5 text-sm text-muted">
          An open-source, GPL-3.0 accessibility assistant for Windows.
        </p>
      </footer>
    </>
  );
}
