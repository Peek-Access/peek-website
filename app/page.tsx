import { Header } from "@/components/Header";
import { FeatureDemo } from "@/components/FeatureDemo";
import { EyeIcon } from "@/components/EyeIcon";

const REPO = "https://github.com/Peek-Access/Peek";

const pillars = [
  {
    num: "01 / FOLLOW",
    title: "Keep up with your next move.",
    body: "Tab through any application, or hover with the mouse, and hear the name, role and state of the control you’ve reached — via native Windows UI Automation, not a screen-scrape.",
    tag: "Keyboard & mouse tracking · Throttled, de-duplicated announcements",
  },
  {
    num: "02 / EXPLORE",
    title: "Look beneath the surface.",
    body: "Browse a window’s full accessibility tree, not just what’s under the cursor. Inspect controls, and keep an eye on running apps and processes without leaving the keyboard.",
    tag: "Element Inspector · App & process monitors",
  },
  {
    num: "03 / UNDERSTAND",
    title: "Fill in the missing details.",
    body: "When accessibility metadata runs out, OCR reads the text in images and non-accessible UI. When you want more, ask an AI provider of your choice to describe the screen.",
    tag: "OCR fallback · Optional, opt-in AI descriptions",
  },
];

const extras = [
  "Local, offline text-to-speech (Piper)",
  "English, German & Chinese, auto-detected",
  "Dockable shell you can pin to a screen edge",
];

const resources = [
  {
    href: `${REPO}/blob/main/docs/USER_GUIDE.md`,
    title: "Start with the user guide",
    body: "Keyboard shortcuts, speech setup and everyday use.",
  },
  {
    href: `${REPO}/discussions`,
    title: "Ask a question",
    body: "Share configurations or get help from the community.",
  },
  {
    href: `${REPO}/issues`,
    title: "Tell us what you need",
    body: "Report a bug or suggest an improvement.",
  },
  {
    href: `${REPO}/blob/main/LICENSING_AND_SUPPORT.md`,
    title: "Bring Peek to your organization",
    body: "Free guidance for government & non-profits, paid custom development for everyone else.",
  },
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
                Open source · Early development
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
              <p className="mt-6 max-w-[480px] text-lg leading-relaxed text-muted">
                Most screen readers give you the words on screen. Peek gives
                you the machine itself — the windows, processes and UI
                structure behind every control.
              </p>
              <p className="mt-4 max-w-[480px] text-lg leading-relaxed text-muted">
                A local-first accessibility assistant for Windows, built on
                native UI Automation. Free and open source, GPL-3.0.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={REPO}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-forest px-6 py-4 text-base font-semibold text-white transition-transform hover:-translate-y-0.5"
                >
                  View on GitHub <span aria-hidden="true">↗</span>
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#b9cdc0] px-6 py-4 text-base font-semibold transition-transform hover:-translate-y-0.5"
                >
                  Explore the features
                </a>
              </div>
              <p className="mt-5 text-sm text-muted">
                Windows x64{" "}
                <b className="px-2 font-medium text-[#92a79a]">·</b> Built in
                public — no packaged builds yet
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
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="text-xs font-bold uppercase tracking-[2px] text-accent">
                More ways to understand
              </div>
              <h2 className="mt-3 text-[32px] font-bold tracking-tight sm:text-[38px]">
                Go beyond the words.
              </h2>
            </div>
            <p className="max-w-[385px] text-base text-muted">
              From the control under your cursor to the structure of an
              entire window — find the detail you need, in the way that works
              for you.
            </p>
          </div>

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
                <span className="mt-5 block text-xs text-accent">
                  {f.tag}
                </span>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {extras.map((e) => (
              <span
                key={e}
                className="rounded-full border border-line px-4 py-2 text-sm text-muted"
              >
                {e}
              </span>
            ))}
          </div>
        </section>

        {/* Status / early development */}
        <section
          id="status"
          className="mx-auto max-w-[1200px] px-6 sm:px-10"
          aria-labelledby="status-title"
        >
          <div className="grid gap-10 rounded-2xl bg-forest p-8 text-white sm:p-12 lg:grid-cols-2">
            <div>
              <div className="text-xs font-bold uppercase tracking-[2px] text-green">
                Where things stand today
              </div>
              <h2
                id="status-title"
                className="mt-5 text-[32px] font-bold tracking-tight sm:text-[40px]"
              >
                Early days, built in public.
              </h2>
              <p className="mt-5 max-w-[420px] text-base text-[#b2c8ba]">
                Peek is under active early development. There’s no packaged
                installer yet — the source is public and building from it
                already works, but we’d rather say that plainly than promise
                a polished download that isn’t there.
              </p>
              <p className="mt-4 max-w-[420px] text-base text-[#b2c8ba]">
                Star or watch the repository and you’ll know the moment a
                first build ships.
              </p>
            </div>
            <div className="border-t border-[#345040] pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <a
                href={REPO}
                target="_blank"
                rel="noreferrer"
                className="mb-3 flex w-full items-center justify-center gap-3 rounded-lg bg-green px-6 py-4 text-base font-semibold text-[#062c17] transition-transform hover:-translate-y-0.5"
              >
                Star the repo on GitHub <span aria-hidden="true">↗</span>
              </a>
              <a
                href={`${REPO}/blob/main/build.py`}
                target="_blank"
                rel="noreferrer"
                className="mb-3 flex w-full items-center justify-center gap-3 rounded-lg border border-white/30 px-6 py-4 text-base font-semibold transition-transform hover:-translate-y-0.5"
              >
                Build it from source <span aria-hidden="true">↗</span>
              </a>
              <p className="text-sm text-[#b2c8ba]">
                Requires .NET and Windows x64. See the repo for current setup
                steps — they’ll change as the project matures.
              </p>
              <details className="mt-5 border-t border-[#345040] pt-4 text-sm text-[#d2e5d8]">
                <summary className="cursor-pointer">
                  When will there be a download?
                </summary>
                <p className="mt-3">
                  As soon as there’s a build worth shipping. Releases will
                  show up on the{" "}
                  <a
                    href={`${REPO}/releases`}
                    className="text-green underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Releases page ↗
                  </a>{" "}
                  — nowhere else.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section
          id="help"
          className="mx-auto grid max-w-[1200px] gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20"
        >
          <div>
            <div className="text-xs font-bold uppercase tracking-[2px] text-accent">
              A helping hand
            </div>
            <h2 className="mt-3 text-[32px] font-bold tracking-tight sm:text-[38px]">
              You don’t have to
              <br />
              figure it out alone.
            </h2>
            <p className="mt-5 max-w-[350px] text-base text-muted">
              Get comfortable with Peek, find an answer, or help shape what
              comes next.
            </p>
          </div>
          <div>
            {resources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start justify-between gap-6 border-b border-line py-6 first:pt-0"
              >
                <span>
                  <strong className="block text-lg font-semibold group-hover:underline">
                    {r.title}
                  </strong>
                  <small className="text-base text-muted">{r.body}</small>
                </span>
                <span aria-hidden="true" className="text-xl text-accent">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Community */}
        <section className="bg-[#eff7f2] px-6 py-9 sm:px-10">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                Better access is something we build together.
              </h3>
              <p className="mt-1 text-base text-muted">
                Explore the code, share feedback, or help shape what comes
                next.
              </p>
            </div>
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-[#b9cdc0] px-6 py-4 text-base font-semibold transition-transform hover:-translate-y-0.5"
            >
              Join us on GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="mx-auto max-w-[1200px] px-6 py-9 sm:px-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <a href="#" className="flex items-center gap-3 text-xl font-bold">
            <EyeIcon className="h-8 w-8" />
            Peek
          </a>
          <div className="flex flex-wrap gap-6 text-sm">
            <a href="#status" className="hover:underline">
              Status
            </a>
            <a href="#help" className="hover:underline">
              Help & resources
            </a>
            <a
              href={`${REPO}/blob/main/LICENSE`}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              License
            </a>
            <a
              href={REPO}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Source code ↗
            </a>
          </div>
        </div>
        <p className="mt-5 text-sm text-muted">
          An open-source, GPL-3.0 accessibility assistant for Windows. Not
          affiliated with Microsoft.
        </p>
      </footer>
    </>
  );
}
