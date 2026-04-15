import Link from "next/link";
import { TOPICS } from "@/lib/topics";

export function Sidebar({ activeTopic, hideTopics = false }: { activeTopic?: string; hideTopics?: boolean }) {
  return (
    <aside className="w-full md:w-[220px] md:shrink-0 text-base">
      <Link href="/" className="block group" aria-label="Back to home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/avatar.png"
          alt="Dr. David Benson at the Reality Science podium"
          className="w-full max-w-[200px] md:w-full mb-4 rounded-md object-cover border transition-opacity group-hover:opacity-90"
          style={{ borderColor: "var(--border)", aspectRatio: "2 / 3" }}
        />
        <div className="text-xs uppercase tracking-wider mb-1" style={{ color: "var(--muted)" }}>Gedalia</div>
        <div className="serif italic text-xl leading-tight">Dr. David Benson</div>
        <div className="text-sm mb-3" style={{ color: "var(--muted)" }}>
          Reality Scientist<sup className="text-[0.6em] ml-0.5">™</sup>
        </div>
      </Link>
      <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--muted)" }}>
        Investigating the structure of experience: time, identity, memory, and
        the patterns underneath.
      </p>

      {!hideTopics && (
      <>
      <div className="text-xs uppercase tracking-wider mb-2" style={{ color: "var(--muted)" }}>
        Topics
      </div>
      <ul className="flex flex-wrap gap-1.5 mb-5">
        {TOPICS.map((t) => {
          const active = activeTopic === t;
          return (
            <li key={t}>
              <Link
                href={`/theories?topic=${t}`}
                className="px-2.5 py-1 text-xs rounded-full border"
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
      </>
      )}

      {/* On desktop the link sections live in the sidebar. On mobile they are
          rendered separately at the bottom of the page via <SidebarLinks /> */}
      <div className="hidden md:block">
        <SidebarLinks compact />
      </div>
    </aside>
  );
}

export function SidebarLinks({ compact = false }: { compact?: boolean }) {
  const sizeLabel = compact ? "text-xs" : "text-xs";
  const sizeLink = compact ? "text-sm" : "text-base";
  return (
    <div className={compact ? "" : "mt-12 pt-8 border-t"} style={!compact ? { borderColor: "var(--border)" } : undefined}>
      <div className={`${sizeLabel} uppercase tracking-wider mb-2`} style={{ color: "var(--muted)" }}>
        Elsewhere
      </div>
      <ul className={`space-y-1 ${sizeLink}`}>
        <li><a href="https://relohu.com" className="underline" style={{ textUnderlineOffset: 3 }}>ReLoHu</a></li>
        <li><a href="https://mindreport.ai" className="underline" style={{ textUnderlineOffset: 3 }}>Mind Report</a></li>
      </ul>

      <div className={`${sizeLabel} uppercase tracking-wider mt-5 mb-2`} style={{ color: "var(--muted)" }}>
        On X
      </div>
      <ul className={`space-y-1 ${sizeLink}`}>
        <li><a href="https://x.com/relohu" className="underline" style={{ textUnderlineOffset: 3 }}>@relohu</a></li>
        <li><a href="https://x.com/realitysciences" className="underline" style={{ textUnderlineOffset: 3 }}>@realitysciences</a></li>
        <li><a href="https://x.com/rosecolornews" className="underline" style={{ textUnderlineOffset: 3 }}>@rosecolornews</a></li>
        <li><a href="https://x.com/mindreportai" className="underline" style={{ textUnderlineOffset: 3 }}>@mindreportai</a></li>
      </ul>
    </div>
  );
}
