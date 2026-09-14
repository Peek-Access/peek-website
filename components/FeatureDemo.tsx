"use client";

import { useState } from "react";
import { EyeIcon } from "./EyeIcon";

type ModeKey = "reader" | "inspector" | "ai";

const modes: Record<
  ModeKey,
  {
    tabLabel: string;
    label: string;
    pill: string;
    title: string;
    description: string;
    meta: string;
  }
> = {
  reader: {
    tabLabel: "Keyboard & Mouse",
    label: "KEYBOARD FOCUS",
    pill: "Windows UI Automation",
    title: "“Download, button.”",
    description: "The control you’ve just reached",
    meta: "Announced only when it adds information",
  },
  inspector: {
    tabLabel: "Element Inspector",
    label: "WINDOW STRUCTURE",
    pill: "Element Inspector",
    title: "A window. Every detail.",
    description: "Window → Navigation → Download button",
    meta: "Browse the full UI tree, not just the cursor",
  },
  ai: {
    tabLabel: "AI Analysis",
    label: "MORE CONTEXT",
    pill: "Optional · Your provider",
    title: "A little help with the bigger picture.",
    description: "Ask for a screen or window description",
    meta: "Off by default — needs your consent and API key",
  },
};

const bars = [9, 17, 29, 19, 39, 47, 28, 37, 21, 31, 45, 27, 17, 26, 11, 18, 7];

export function FeatureDemo() {
  const [active, setActive] = useState<ModeKey>("reader");
  const m = modes[active];

  return (
    <div className="min-w-0">
      <p className="mb-3 text-right text-xs uppercase tracking-[1.4px] text-muted">
        A little more clarity, at every step
      </p>
      <div className="overflow-hidden rounded-2xl border border-[#254634] bg-[#0b2017] text-[#d6e9dc] shadow-[0_28px_55px_rgba(9,40,25,0.13)] rotate-1">
        <div className="flex items-center justify-between border-b border-[#294131] px-5 py-3">
          <div className="flex items-center gap-2 font-semibold tracking-wide">
            <EyeIcon className="h-6 w-6" />
            PEEK
          </div>
          <span aria-hidden="true" className="text-[15px] tracking-[13px] text-[#9cb6a5]">
            − □ ×
          </span>
        </div>

        <div
          role="tablist"
          aria-label="Feature illustration"
          className="flex gap-5 border-b border-[#294131] px-5"
        >
          {(Object.keys(modes) as ModeKey[]).map((key) => (
            <button
              key={key}
              role="tab"
              aria-selected={active === key}
              className={`border-b-2 py-4 text-[13px] transition-colors ${
                active === key
                  ? "border-green text-green"
                  : "border-transparent text-[#a3bcac]"
              }`}
              onClick={() => setActive(key)}
            >
              {modes[key].tabLabel}
            </button>
          ))}
        </div>

        <div className="min-h-[280px] p-6" role="tabpanel">
          <div className="flex items-center justify-between text-[11px] tracking-[1.4px] text-[#91af9b]">
            <span>{m.label}</span>
            <span className="rounded bg-[#1e432b] px-2 py-1 text-[#b8f9c9]">
              {m.pill}
            </span>
          </div>
          <p className="my-5 text-[22px] font-medium leading-snug text-[#effbf2]">
            {m.title}
          </p>
          <div className="flex items-center justify-between rounded-md border border-[#315b40] px-3 py-2 text-[#b1c8b8]">
            <span>{m.description}</span>
            <span aria-hidden="true">⌖</span>
          </div>

          {active === "reader" && (
            <div
              aria-hidden="true"
              className="my-6 flex h-12 items-center gap-1 after:ml-2 after:h-px after:flex-1 after:bg-[#2b5137]"
            >
              {bars.map((h, i) => (
                <i
                  key={i}
                  className="block w-1 rounded bg-green opacity-90"
                  style={{ height: h }}
                />
              ))}
            </div>
          )}

          <div className="mt-6 flex justify-between text-[11px] text-[#96af9f]">
            <span>{m.meta}</span>
            <span>
              <kbd className="rounded border border-[#406049] px-1.5 py-0.5 font-mono text-[11px]">
                Ctrl
              </kbd>{" "}
              +{" "}
              <kbd className="rounded border border-[#406049] px-1.5 py-0.5 font-mono text-[11px]">
                Alt
              </kbd>{" "}
              +{" "}
              <kbd className="rounded border border-[#406049] px-1.5 py-0.5 font-mono text-[11px]">
                S
              </kbd>{" "}
              to stop
            </span>
          </div>
        </div>

        <div className="flex justify-between border-t border-[#294131] px-5 py-3 text-[11px] text-[#9ab6a3]">
          <span className="text-[#a7ebbe]">Designed around your keyboard</span>
          <span className="max-w-[150px] text-right">
            Illustrative preview · no audio
          </span>
        </div>
      </div>
      <p className="mt-5 flex items-center gap-3 text-sm text-muted">
        <span aria-hidden="true" className="text-xl text-accent">
          ↳
        </span>
        Explore the tabs to get a feel for Peek.
      </p>
    </div>
  );
}
