import fs from "fs";
import path from "path";
import matter from "gray-matter";
import type { Topic } from "./topics";

export type Theory = {
  slug: string;
  title: string;
  topic: Topic;
  date: string;
  readTime: string;
  status: "working" | "settled";
  excerpt: string;
  featured?: boolean;
  content: string;
};

const ROOT = path.join(process.cwd(), "content", "theories");

export function getAllTheories(): Theory[] {
  if (!fs.existsSync(ROOT)) return [];
  const files = fs.readdirSync(ROOT).filter((f) => f.endsWith(".mdx"));
  const items = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(ROOT, file), "utf8");
    const { data, content } = matter(raw);
    return { slug, content, ...(data as Omit<Theory, "slug" | "content">) } as Theory;
  });
  return items.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getTheory(slug: string): Theory | undefined {
  return getAllTheories().find((t) => t.slug === slug);
}
