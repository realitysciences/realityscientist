import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import type { Metadata } from "next";
import { Sidebar, SidebarLinks } from "@/components/sidebar";
import { getAllTheories, getTheory } from "@/lib/theories";

export function generateStaticParams() {
  return getAllTheories().map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const t = getTheory(params.slug);
  if (!t) return {};
  const url = `https://realityscientist.com/theories/${t.slug}`;
  return {
    title: t.title,
    description: t.excerpt,
    alternates: { canonical: url },
    openGraph: { title: t.title, description: t.excerpt, url, type: "article" },
    twitter: { card: "summary_large_image", title: t.title, description: t.excerpt },
  };
}

export default function TheoryPage({ params }: { params: { slug: string } }) {
  const t = getTheory(params.slug);
  if (!t) notFound();

  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-10">
      <Sidebar activeTopic={t.topic} />
      <article className="flex-1 min-w-0 max-w-2xl">
        <nav className="text-sm mb-6" style={{ color: "var(--muted)" }}>
          <Link href="/theories">Theories</Link> / <Link href={`/theories?topic=${t.topic}`}>{t.topic}</Link>
        </nav>
        <div
          className="text-xs uppercase tracking-wider mb-3"
          style={{ color: "var(--muted)" }}
        >
          Theory · {t.topic}
        </div>
        <h1 className="serif italic text-3xl sm:text-4xl md:text-5xl leading-tight mb-4">{t.title}</h1>
        <div className="text-sm mb-10" style={{ color: "var(--muted)" }}>
          {new Date(t.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          {" · "}{t.readTime}{" · "}Status: {t.status}
        </div>

        <div className="prose-serif">
          <MDXRemote source={t.content} />
        </div>

        <aside
          className="mt-16 p-6 border rounded-lg"
          style={{ borderColor: "var(--border)", background: "var(--surface)" }}
        >
          <div className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
            Related work
          </div>
          <div className="serif italic text-lg mb-1">ReLoHu</div>
          <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>
            A practice for living the structure described in these theories.
          </p>
          <a href="https://relohu.com" className="text-sm underline" style={{ textUnderlineOffset: 3 }}>
            relohu.com →
          </a>
        </aside>
        <div className="md:hidden">
          <SidebarLinks />
        </div>
      </article>
    </div>
  );
}
