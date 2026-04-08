import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Topbar() {
  return (
    <header className="border-b" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Link href="/" className="flex flex-col leading-tight">
            <span className="wordmark text-xl sm:text-2xl">Reality Scientist</span>
            <span className="text-[11px] sm:text-xs" style={{ color: "var(--muted)" }}>
              Dr. David Benson
            </span>
          </Link>
          <nav className="flex items-center gap-3 sm:gap-5 text-sm flex-wrap justify-end">
            <form action="/search" method="GET" className="hidden md:block">
              <input
                type="search"
                name="q"
                placeholder="Search theories"
                className="px-3 py-1 text-xs rounded-full border bg-transparent w-48 focus:outline-none focus:w-56 transition-all"
                style={{ borderColor: "var(--border)", color: "var(--fg)" }}
              />
            </form>
            <Link href="/theories">Theories</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <ThemeToggle />
          </nav>
        </div>
        <form action="/search" method="GET" className="md:hidden mt-3">
          <input
            type="search"
            name="q"
            placeholder="Search theories"
            className="w-full px-4 py-2 text-sm rounded-full border bg-transparent focus:outline-none"
            style={{ borderColor: "var(--border)", color: "var(--fg)" }}
          />
        </form>
      </div>
    </header>
  );
}
