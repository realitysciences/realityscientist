import Link from "next/link";
import { TOPICS } from "@/lib/topics";

export function Sidebar({ activeTopic }: { activeTopic?: string }) {
  return (
    <aside className="w-[200px] shrink-0 text-sm">
      <div
        className="w-20 h-20 rounded-full mb-4 border"
        style={{
          borderColor: "var(--border)",
          background:
            "radial-gradient(circle at 30% 30%, #c9c4b6, #5a564c)",
        }}
        aria-hidden
      />
      <div className="serif italic text-lg leading-tight">Dr. David Benson</div>
      <div className="text-xs mb-3" style={{ color: "var(--muted)" }}>
        Reality Scientist
      </div>
      <p className="text-xs leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
        Investigating the structure of experience — time, identity, memory, and
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
                  borderColor: "var(--border)",
                  background: active ? "var(--surface)" : "transparent",
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
        <li><a href="https://x.com/relohu" className="underline" style={{ textUnderlineOffset: 3 }}>X / @relohu</a></li>
      </ul>
    </aside>
  );
}
