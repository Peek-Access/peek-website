"use client";

import { useLatestRelease } from "./useLatestRelease";

/** Renders "vX.Y.Z ·" for the latest release, or nothing until it's known. */
export function ReleaseVersion() {
  const { version } = useLatestRelease();

  if (!version) return null;

  return (
    <span className="inline-flex items-center gap-2">
      v{version}
      <b aria-hidden="true" className="font-medium text-[#92a79a]">
        ·
      </b>
    </span>
  );
}
