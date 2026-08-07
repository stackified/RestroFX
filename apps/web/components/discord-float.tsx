"use client";

/**
 * Floating "Join Discord" call-to-action pinned to the bottom-right corner.
 * Themed to RestroFX (brand primary + Discord blurple accent on the icon).
 */
export function DiscordFloat() {
  return (
    <a
      href="https://discord.gg/VJJEwe3tU2"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Join our Discord community"
      className="group fixed bottom-5 right-5 z-[90] inline-flex items-center gap-2.5 rounded-full bg-primary py-2.5 pl-2.5 pr-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-black/30 ring-1 ring-black/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:bottom-6 sm:right-6"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-[#5865F2] text-white">
        <span className="absolute inset-0 rounded-full bg-[#5865F2] opacity-60 blur-md transition-opacity duration-300 group-hover:opacity-90" />
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="relative h-5 w-5"
          aria-hidden="true"
        >
          <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3.2a.075.075 0 0 0-.079.037c-.34.607-.719 1.4-.984 2.022a18.29 18.29 0 0 0-5.487 0 12.68 12.68 0 0 0-.996-2.022.077.077 0 0 0-.079-.037A19.74 19.74 0 0 0 5.174 4.37a.07.07 0 0 0-.032.027C1.533 9.812.564 15.107 1.04 20.336a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.994 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.11 13.11 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.927 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.099.246.198.372.292a.077.077 0 0 1-.006.128 12.3 12.3 0 0 1-1.873.891.077.077 0 0 0-.041.107c.36.699.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.84 19.84 0 0 0 6.002-3.03.077.077 0 0 0 .032-.055c.5-6.045-.838-11.297-3.549-15.94a.061.061 0 0 0-.031-.028zM8.02 17.152c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.956-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.956 2.42-2.157 2.42zm7.975 0c-1.183 0-2.157-1.086-2.157-2.42 0-1.333.955-2.42 2.157-2.42 1.21 0 2.176 1.096 2.157 2.42 0 1.334-.946 2.42-2.157 2.42z" />
        </svg>
      </span>
      <span className="pr-0.5 hidden sm:inline">Join Discord</span>
    </a>
  );
}
