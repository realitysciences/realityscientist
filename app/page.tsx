import { Sidebar, SidebarLinks } from "@/components/sidebar";
import { TheoryCard } from "@/components/theory-card";
import { getAllTheories } from "@/lib/theories";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function HomePage({
  searchParams,
}: {
  searchParams: { sort?: string };
}) {
  const theories = getAllTheories();
  const sort: "newest" | "oldest" =
    searchParams.sort === "oldest" ? "oldest" : "newest";

  const featured = theories[Math.floor(Math.random() * theories.length)];
  const rest = theories
    .filter((t) => t.slug !== featured?.slug)
    .sort((a, b) =>
      sort === "newest" ? (a.date < b.date ? 1 : -1) : a.date < b.date ? -1 : 1
    );

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <div className="mb-6 flex items-baseline justify-between gap-4">
          <div className="text-xs uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            Featured theory
          </div>
          <div className="text-xs" style={{ color: "var(--muted)" }}>
            <span className="serif italic text-base" style={{ color: "var(--fg)" }}>{theories.length}</span> theories total
          </div>
        </div>
        {featured && (
          <div className="mb-10">
            <TheoryCard t={featured} hero />
          </div>
        )}

        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            Sort
          </span>
          <Link
            href="/?sort=newest"
            className="px-3 py-1 text-xs rounded-full border"
            style={{
              borderColor: sort === "newest" ? "var(--fg)" : "var(--border)",
              background: sort === "newest" ? "var(--surface)" : "transparent",
            }}
          >
            Newest first
          </Link>
          <Link
            href="/?sort=oldest"
            className="px-3 py-1 text-xs rounded-full border"
            style={{
              borderColor: sort === "oldest" ? "var(--fg)" : "var(--border)",
              background: sort === "oldest" ? "var(--surface)" : "transparent",
            }}
          >
            Oldest first
          </Link>
          <Link
            href="/theories"
            className="text-xs underline ml-auto"
            style={{ color: "var(--muted)", textUnderlineOffset: 3 }}
          >
            View full archive →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((t) => (
            <TheoryCard key={t.slug} t={t} />
          ))}
        </div>
        <div className="md:hidden">
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
}
