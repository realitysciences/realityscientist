import { Sidebar, SidebarLinks } from "@/components/sidebar";
import { TheoryCard } from "@/components/theory-card";
import { getAllTheories } from "@/lib/theories";
import { TOPICS, type Topic } from "@/lib/topics";
import Link from "next/link";

export const metadata = { title: "Theories" };

export default function TheoriesPage({
  searchParams,
}: {
  searchParams: { topic?: string };
}) {
  const all = getAllTheories();
  const topic = searchParams.topic as Topic | undefined;
  const filtered = topic ? all.filter((t) => t.topic === topic) : all;

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      <Sidebar activeTopic={topic} hideTopics />
      <div className="flex-1 min-w-0">
        <h1 className="serif italic text-3xl mb-2">Theories</h1>
        <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
          {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
          {topic ? ` in ${topic}` : ""}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          <Link
            href="/theories"
            className="px-3 py-1 text-xs rounded-full border"
            style={{
              borderColor: "var(--border)",
              background: !topic ? "var(--surface)" : "transparent",
            }}
          >
            All
          </Link>
          {TOPICS.map((t) => (
            <Link
              key={t}
              href={`/theories?topic=${t}`}
              className="px-3 py-1 text-xs rounded-full border"
              style={{
                borderColor: topic === t ? "var(--fg)" : "var(--border)",
                background: `var(--topic-${t.toLowerCase()})`,
              }}
            >
              {t}
            </Link>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((t) => (
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
