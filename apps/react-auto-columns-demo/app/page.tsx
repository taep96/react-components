"use client";

import { useState } from "react";
import Columns from "react-auto-columns";

export default function Page() {
  const [count, setCount] = useState(3);
  const [responsive, setResponsive] = useState(true);

  return (
    <div className="flex min-h-screen flex-col items-center gap-8 bg-zinc-800 pt-32 text-2xl font-bold text-zinc-50">
      <div className="flex flex-col items-center gap-2 font-normal">
        <h1 className="text-6xl font-semibold">
          Columns{!responsive && `: ${count}`}
        </h1>
        <p
          className={`flex flex-wrap items-center justify-center gap-[0.4ch] ${
            !responsive && "hidden"
          }`}
        >
          Try resizing the window or use (
          <kbd className="rounded border border-zinc-900 bg-zinc-800 px-1 py-0.5 text-sm">
            f12
          </kbd>
          )
          <kbd className="rounded border border-zinc-900 bg-zinc-800 px-1 py-0.5 text-sm">
            Ctrl + Shift + M
          </kbd>
        </p>
      </div>

      <div className="flex flex-col items-center gap-4">
        <label className="flex items-center gap-2" htmlFor="responsive">
          {responsive ? "Responsive" : "Fixed"}
          <input
            className="h-6 w-6"
            type="checkbox"
            id="responsive"
            checked={responsive}
            onChange={() => setResponsive(!responsive)}
          />
        </label>
        <div className={`flex gap-2 ${responsive && "hidden"}`}>
          <button
            className="h-12 w-12 rounded-full bg-zinc-700"
            type="button"
            onClick={() => setCount(Math.min(count + 1, 100))}
          >
            +
          </button>

          <button
            className="h-12 w-12 rounded-full bg-zinc-700"
            type="button"
            onClick={() => setCount(Math.max(count - 1, 1))}
          >
            -
          </button>
        </div>
      </div>
      <Columns
        className="flex w-3/4 gap-4"
        columnClassName="flex flex-col gap-4 flex-1"
        // Tailwind breakpoints
        //   sm: 640
        //   md: 768
        //   lg: 1024
        //   xl: 1280
        //   2xl: 1536
        columns={
          responsive ? { 640: 2, 768: 3, 1024: 4, 1280: 5, 1536: 6 } : count
        }
      >
        <div className="h-48 rounded-lg bg-zinc-700 p-4">1</div>
        <div className="h-32 rounded-lg bg-zinc-700 p-4">2</div>
        <div className="h-16 rounded-lg bg-zinc-700 p-4">3</div>
        <div className="h-48 rounded-lg bg-zinc-700 p-4">4</div>
        <div className="h-32 rounded-lg bg-zinc-700 p-4">5</div>
        <div className="h-16 rounded-lg bg-zinc-700 p-4">6</div>
        <div className="h-48 rounded-lg bg-zinc-700 p-4">7</div>
        <div className="h-32 rounded-lg bg-zinc-700 p-4">8</div>
        <div className="h-16 rounded-lg bg-zinc-700 p-4">9</div>
        <div className="h-48 rounded-lg bg-zinc-700 p-4">10</div>
      </Columns>
    </div>
  );
}
