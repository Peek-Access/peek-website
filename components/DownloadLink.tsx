"use client";

import type { ReactNode } from "react";
import { useLatestRelease } from "./useLatestRelease";

type Props = {
  className?: string;
  children: ReactNode;
};

/** Anchor pointing at the latest Windows setup .exe on GitHub Releases. */
export function DownloadLink({ className, children }: Props) {
  const { downloadUrl } = useLatestRelease();

  return (
    <a href={downloadUrl} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
