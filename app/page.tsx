import { Sidebar, SidebarLinks } from "@/components/sidebar";
import { TheoryCard } from "@/components/theory-card";
import { getAllTheories } from "@/lib/theories";

export const dynamic = "force-dynamic";

export default function HomePage() {
  const theories = getAllTheories();
  const featured = theories[Math.floor(Math.random() * theories.length)];
  const rest = theories.filter((t) => t.slug !== featured?.slug);

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
