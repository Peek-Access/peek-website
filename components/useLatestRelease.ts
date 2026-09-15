"use client";

import { useEffect, useState } from "react";

const OWNER_REPO = "Peek-Access/Peek";
const API_URL = `https://api.github.com/repos/${OWNER_REPO}/releases/latest`;
const FALLBACK_URL = `https://github.com/${OWNER_REPO}/releases/latest`;
const CACHE_KEY = "peek:latest-release";
const CACHE_TTL_MS = 10 * 60 * 1000;

export type LatestRelease = {
  version: string | null;
  downloadUrl: string;
};

const DEFAULT_STATE: LatestRelease = { version: null, downloadUrl: FALLBACK_URL };

// Module-level cache + in-flight dedup so every DownloadLink/ReleaseVersion
// instance on the page shares one GitHub API request instead of firing one each.
let cachedState: LatestRelease | null = null;
let inFlight: Promise<LatestRelease> | null = null;
const listeners = new Set<(state: LatestRelease) => void>();

function notify(state: LatestRelease) {
  cachedState = state;
  listeners.forEach((listener) => listener(state));
}

function readStoredCache(): LatestRelease | null {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as LatestRelease & { fetchedAt: number };
    if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return null;
    return { version: parsed.version, downloadUrl: parsed.downloadUrl };
  } catch {
    return null;
  }
}

function writeStoredCache(state: LatestRelease) {
  try {
    window.localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ ...state, fetchedAt: Date.now() })
    );
  } catch {
    // localStorage unavailable (private mode, etc.) — safe to skip caching
  }
}

async function fetchLatestRelease(): Promise<LatestRelease> {
  const stored = readStoredCache();
  if (stored) return stored;

  try {
    const res = await fetch(API_URL, {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data: {
      tag_name?: string;
      assets?: { name: string; browser_download_url: string }[];
    } = await res.json();

    const asset = data.assets?.find((a) => /setup.*\.exe$/i.test(a.name));
    const version = data.tag_name?.replace(/^v/i, "") ?? null;
    const state: LatestRelease = {
      version,
      downloadUrl: asset?.browser_download_url ?? FALLBACK_URL,
    };
    if (asset && version) writeStoredCache(state);
    return state;
  } catch {
    return DEFAULT_STATE;
  }
}

/** Latest Windows setup download URL + version, fetched client-side from the GitHub Releases API. */
export function useLatestRelease(): LatestRelease {
  const [state, setState] = useState<LatestRelease>(cachedState ?? DEFAULT_STATE);

  useEffect(() => {
    listeners.add(setState);

    if (!cachedState) {
      if (!inFlight) {
        inFlight = fetchLatestRelease().finally(() => {
          inFlight = null;
        });
      }
      inFlight.then(notify);
    }

    return () => {
      listeners.delete(setState);
    };
  }, []);

  return state;
}
