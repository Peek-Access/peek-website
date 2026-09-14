"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export function Carousel({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = images.length;

  const go = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count]
  );

  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    if (count <= 1 || paused) return;
    timer.current = setInterval(() => go(index + 1), 5000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [count, paused, index, go]);

  if (count === 0) return null;

  return (
    <div
      className="group relative mx-auto aspect-video w-full max-w-[960px] overflow-hidden rounded-2xl border border-line bg-forest shadow-[0_24px_60px_rgba(8,38,25,0.15)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="Product screenshots"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowLeft") go(index - 1);
        if (e.key === "ArrowRight") go(index + 1);
      }}
    >
      <div
        className="flex h-full w-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={src}
            src={src}
            alt={`Peek screenshot ${i + 1}`}
            className="h-full w-full flex-shrink-0 object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous screenshot"
            onClick={() => go(index - 1)}
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-black/60"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="Next screenshot"
            onClick={() => go(index + 1)}
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 hover:bg-black/60"
          >
            ›
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Go to screenshot ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-green" : "w-1.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
