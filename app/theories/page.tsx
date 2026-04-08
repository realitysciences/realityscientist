import { Sidebar, SidebarLinks } from "@/components/sidebar";
import { TheoryCard } from "@/components/theory-card";
import { getAllTheories } from "@/lib/theories";
import { TOPICS, type Topic } from "@/lib/topics";
import Link from "next/link";

export const metadata = { title: "Theories" };

type Sort = "newest" | "oldest";

function buildHref(topic: Topic | undefined, sort: Sort) {
  const params = new URLSearchParams();
  if (topic) params.set("topic", topic);
  if (sort !== "newest") params.set("sort", sort);
  const qs = params.toString();
  return qs ? `/theories?${qs}` : "/theories";
}

export default function TheoriesPage({
  searchParams,
}: {
  searchParams: { topic?: string; sort?: string };
}) {
  const all = getAllTheories();
  const topic = searchParams.topic as Topic | undefined;
  const sort: Sort = searchParams.sort === "oldest" ? "oldest" : "newest";

  const filteredByTopic = topic ? all.filter((t) => t.topic === topic) : all;
  const filtered = [...filteredByTopic].sort((a, b) =>
    sort === "newest" ? (a.date < b.date ? 1 : -1) : a.date < b.date ? -1 : 1
  );

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      <Sidebar activeTopic={topic} hideTopics />
      <div className="flex-1 min-w-0">
        <h1 className="serif italic text-3xl mb-2">Theories</h1>
        <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
          {filtered.length} {filtered.length === 1 ? "entry" : "entries"}
          {topic ? ` in ${topic}` : ""}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          <Link
            href={buildHref(undefined, sort)}
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
              href={buildHref(t, sort)}
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

        <div className="flex items-center gap-2 mb-8">
          <span className="text-[11px] uppercase tracking-wider" style={{ color: "var(--muted)" }}>
            Sort
          </span>
          <Link
            href={buildHref(topic, "newest")}
            className="px-3 py-1 text-xs rounded-full border"
            style={{
              borderColor: sort === "newest" ? "var(--fg)" : "var(--border)",
              background: sort === "newest" ? "var(--surface)" : "transparent",
            }}
          >
            Newest first
          </Link>
          <Link
            href={buildHref(topic, "oldest")}
            className="px-3 py-1 text-xs rounded-full border"
            style={{
              borderColor: sort === "oldest" ? "var(--fg)" : "var(--border)",
              background: sort === "oldest" ? "var(--surface)" : "transparent",
            }}
          >
            Oldest first
          </Link>
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
