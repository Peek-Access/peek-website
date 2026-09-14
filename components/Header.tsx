"use client";

import { useState } from "react";
import { EyeIcon } from "./EyeIcon";

const links = [
  { href: "#features", label: "Features" },
  {
    href: "https://github.com/Peek-Access/Peek",
    label: "GitHub ↗",
    external: true,
  },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-line bg-white sticky top-0 z-20">
      <header className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-6 px-6 sm:px-10">
        <a
          href="#"
          className="flex items-center gap-3 text-[26px] font-bold tracking-tight text-ink"
          aria-label="Peek home"
        >
          <EyeIcon className="h-9 w-9" />
          Peek
        </a>

        <button
          className="rounded-md border border-line bg-white px-3 py-2 text-sm sm:hidden"
          aria-controls="navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>

        <nav
          id="navigation"
          aria-label="Main navigation"
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-[76px] z-10 flex-col items-stretch gap-5 border-b border-line bg-white p-6 shadow-lg sm:static sm:flex sm:flex-row sm:items-center sm:gap-8 sm:border-0 sm:p-0 sm:shadow-none`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              className="text-[15px] font-semibold text-ink hover:underline hover:underline-offset-[6px]"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/Peek-Access/Peek/releases/latest"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-3 rounded-lg bg-forest px-5 py-3 text-[15px] font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            Download <span aria-hidden="true">↓</span>
          </a>
        </nav>
      </header>
    </div>
  );
}
