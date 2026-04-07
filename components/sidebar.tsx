import Link from "next/link";
import { TOPICS } from "@/lib/topics";

export function Sidebar({ activeTopic }: { activeTopic?: string }) {
  return (
    <aside className="w-full md:w-[200px] md:shrink-0 text-sm">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/avatar.png"
        alt="Dr. David Benson"
        className="w-24 h-24 mb-4 object-contain"
        style={{ borderColor: "var(--border)" }}
      />
      <div className="serif italic text-lg leading-tight">Dr. David Benson</div>
      <div className="text-xs mb-3" style={{ color: "var(--muted)" }}>
        Reality Scientist
      </div>
      <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
        Investigating the structure of experience , time, identity, memory, and
        the patterns underneath.
      </p>

      <div className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
        Topics
      </div>
      <ul className="flex flex-wrap gap-1.5 mb-5">
        {TOPICS.map((t) => {
          const active = activeTopic === t;
          return (
            <li key={t}>
              <Link
                href={`/theories?topic=${t}`}
                className="px-2 py-0.5 text-[11px] rounded-full border"
                style={{
                  borderColor: active ? "var(--fg)" : "var(--border)",
                  background: `var(--topic-${t.toLowerCase()})`,
                }}
              >
                {t}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="text-[10px] uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
        Elsewhere
      </div>
      <ul className="space-y-1 text-xs">
        <li><a href="https://relohu.com" className="underline" style={{ textUnderlineOffset: 3 }}>ReLoHu</a></li>
        <li><a href="https://mindreport.ai" className="underline" style={{ textUnderlineOffset: 3 }}>Mind Report</a></li>
      </ul>

      <div className="text-[10px] uppercase tracking-wider mt-4 mb-2" style={{ color: "var(--muted)" }}>
        On X
      </div>
      <ul className="space-y-1 text-xs">
        <li><a href="https://x.com/relohu" className="underline" style={{ textUnderlineOffset: 3 }}>@relohu</a></li>
        <li><a href="https://x.com/spheronaut" className="underline" style={{ textUnderlineOffset: 3 }}>@spheronaut</a></li>
        <li><a href="https://x.com/rosecolornews" className="underline" style={{ textUnderlineOffset: 3 }}>@rosecolornews</a></li>
        <li><a href="https://x.com/mindreportai" className="underline" style={{ textUnderlineOffset: 3 }}>@mindreportai</a></li>
      </ul>
    </aside>
  );
}
