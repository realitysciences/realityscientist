import Link from "next/link";
import type { Theory } from "@/lib/theories";
import { TopicIllustration } from "./topic-illustration";
import { TOPIC_INK } from "@/lib/topics";

export function TheoryCard({ t, hero = false }: { t: Theory; hero?: boolean }) {
  return (
    <Link
      href={`/theories/${t.slug}`}
      className="block border rounded-lg overflow-hidden hover:opacity-95 transition"
      style={{ borderColor: "var(--border)", background: "var(--bg)" }}
    >
      <TopicIllustration topic={t.topic} variant={hero ? "hero" : "card"} slug={t.slug} />
      <div className="p-5 sm:p-6">
        <div className="text-xs uppercase tracking-wider mb-2 font-medium" style={{ color: TOPIC_INK[t.topic] }}>
          {t.topic}
        </div>
        <h3 className={`serif italic ${hero ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl"} leading-snug mb-3`}>
          {t.title}
        </h3>
        <p className={`${hero ? "text-base sm:text-lg" : "text-sm sm:text-base"} mb-3 leading-relaxed`} style={{ color: "var(--muted)" }}>
          {t.excerpt}
        </p>
        <div className="text-sm" style={{ color: "var(--muted)" }}>
          {formatDate(t.date)} · {t.readTime}
        </div>
      </div>
    </Link>
  );
}

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
