import { Sidebar } from "@/components/sidebar";
import { TheoryCard } from "@/components/theory-card";
import { getAllTheories } from "@/lib/theories";

export const metadata = { title: "Search" };

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q?: string };
}) {
  const q = (searchParams.q ?? "").trim();
  const all = getAllTheories();
  const results = q
    ? all.filter((t) => {
        const hay = `${t.title} ${t.excerpt} ${t.topic} ${t.content}`.toLowerCase();
        return hay.includes(q.toLowerCase());
      })
    : [];

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      <Sidebar />
      <div className="flex-1 min-w-0">
        <h1 className="serif italic text-3xl mb-2">Search</h1>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
          {q ? (
            <>
              {results.length} {results.length === 1 ? "result" : "results"} for{" "}
              <span className="serif italic">&ldquo;{q}&rdquo;</span>
            </>
          ) : (
            "Type a query in the bar above to search theories."
          )}
        </p>

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {results.map((t) => (
              <TheoryCard key={t.slug} t={t} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
