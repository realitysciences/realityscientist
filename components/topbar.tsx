import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Topbar() {
  return (
    <header
      className="border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-tight">
          <span className="wordmark text-2xl">Reality Scientist</span>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            Dr. David Benson
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm">
          <form action="/search" method="GET" className="block">
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
    </header>
  );
}
