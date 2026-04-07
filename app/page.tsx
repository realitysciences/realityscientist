import { Sidebar } from "@/components/sidebar";
import { TheoryCard } from "@/components/theory-card";
import { getAllTheories } from "@/lib/theories";

export default function HomePage() {
  const theories = getAllTheories();
  const featured = theories.find((t) => t.featured) ?? theories[0];
  const rest = theories.filter((t) => t.slug !== featured?.slug);

  return (
    <div className="flex gap-10">
      <Sidebar />
      <div className="flex-1 min-w-0">
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
      </div>
    </div>
  );
}
