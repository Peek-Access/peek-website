"use client";

import { useState } from "react";
import { EyeIcon } from "./EyeIcon";

type ModeKey = "reader" | "inspector" | "ai";

const modes: Record<
  ModeKey,
  { tabLabel: string; pill: string; title: string; description: string }
> = {
  reader: {
    tabLabel: "Keyboard & Mouse",
    pill: "UI Automation",
    title: "“Download, button.”",
    description: "The control you’ve just reached",
  },
  inspector: {
    tabLabel: "Element Inspector",
    pill: "Inspector",
    title: "A window. Every detail.",
    description: "Window → Navigation → Download button",
  },
  ai: {
    tabLabel: "AI Analysis",
    pill: "Optional",
    title: "A little help with the bigger picture.",
    description: "Ask for a screen or window description",
  },
};

const bars = [9, 17, 29, 19, 39, 47, 28, 37, 21, 31, 45, 27, 17, 26, 11, 18, 7];

export function FeatureDemo() {
  const [active, setActive] = useState<ModeKey>("reader");
  const m = modes[active];

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-[#254634] bg-[#0b2017] text-[#d6e9dc] shadow-[0_28px_55px_rgba(9,40,25,0.13)] rotate-1">
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

      <div className="min-h-[220px] p-6" role="tabpanel">
        <span className="rounded bg-[#1e432b] px-2 py-1 text-[11px] text-[#b8f9c9]">
          {m.pill}
        </span>
        <p className="my-5 text-[22px] font-medium leading-snug text-[#effbf2]">
          {m.title}
        </p>
        <div className="flex items-center justify-between rounded-md border border-[#315b40] px-3 py-2 text-[#b1c8b8]">
          <span>{m.description}</span>
          <span aria-hidden="true">⌖</span>
        </div>

        {active === "reader" && (
          <div aria-hidden="true" className="mt-6 flex h-12 items-center gap-1">
            {bars.map((h, i) => (
              <i
                key={i}
                className="block w-1 rounded bg-green opacity-90"
                style={{ height: h }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
