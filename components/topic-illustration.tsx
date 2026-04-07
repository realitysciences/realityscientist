import { TOPIC_COLORS, TOPIC_INK, type Topic } from "@/lib/topics";

export function TopicIllustration({
  topic,
  variant = "card",
  slug,
}: {
  topic: Topic;
  variant?: "card" | "hero";
  slug?: string;
}) {
  const ink = TOPIC_INK[topic];
  const h = variant === "hero" ? 220 : 130;
  const isFish = slug === "the-fish-do-not-see-what-we-see";
  return (
    <div
      className="w-full overflow-hidden"
      style={{
        height: h,
        background: `var(--topic-${topic.toLowerCase()})`,
      }}
    >
      <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        {isFish && (
          <g stroke={ink} strokeWidth="1.4" fill="none">
            {/* water lines */}
            <path d="M0 40 Q50 30 100 40 T200 40 T300 40 T400 40" opacity="0.5" />
            <path d="M0 60 Q50 50 100 60 T200 60 T300 60 T400 60" opacity="0.4" />
            <path d="M0 195 Q50 185 100 195 T200 195 T300 195 T400 195" opacity="0.4" />
            {/* big fish */}
            <path d="M120 110 Q170 70 240 110 Q170 150 120 110 Z" />
            <path d="M120 110 L80 80 L95 110 L80 140 Z" />
            <circle cx="220" cy="105" r="3" fill={ink} />
            <path d="M150 110 Q170 100 190 110" />
            {/* small fish */}
            <path d="M280 150 Q310 130 345 150 Q310 170 280 150 Z" />
            <path d="M280 150 L260 135 L268 150 L260 165 Z" />
            <circle cx="335" cy="148" r="2" fill={ink} />
            {/* bubbles */}
            <circle cx="260" cy="90" r="4" />
            <circle cx="270" cy="75" r="3" />
            <circle cx="278" cy="62" r="2" />
          </g>
        )}
        {topic === "Time" && (
          <g stroke={ink} strokeWidth="1.4" fill="none">
            {[...Array(7)].map((_, i) => (
              <circle key={i} cx="200" cy="110" r={20 + i * 18} opacity={0.7 - i * 0.08} />
            ))}
          </g>
        )}
        {topic === "Identity" && (
          <g stroke={ink} strokeWidth="1.4" fill="none">
            <circle cx="160" cy="110" r="60" />
            <circle cx="240" cy="110" r="60" />
          </g>
        )}
        {topic === "Structure" && (
          <g stroke={ink} strokeWidth="1.2" fill="none">
            {[...Array(8)].map((_, i) =>
              [...Array(5)].map((_, j) => (
                <rect key={`${i}-${j}`} x={20 + i * 45} y={20 + j * 38} width="30" height="24" />
              ))
            )}
          </g>
        )}
        {topic === "Memory" && (
          <g stroke={ink} strokeWidth="1.4" fill="none">
            <path d="M20 180 Q100 20 200 110 T380 40" />
            <path d="M20 200 Q100 60 200 130 T380 80" opacity="0.6" />
          </g>
        )}
        {!isFish && topic === "Perception" && (
          <g stroke={ink} strokeWidth="1.2" fill="none">
            {[...Array(12)].map((_, i) => {
              const a = (i / 12) * Math.PI * 2;
              return (
                <line key={i} x1="200" y1="110" x2={200 + Math.cos(a) * 100} y2={110 + Math.sin(a) * 100} />
              );
            })}
            <circle cx="200" cy="110" r="20" />
          </g>
        )}
        {topic === "Language" && (
          <g stroke={ink} strokeWidth="1.4" fill="none">
            <path d="M40 110 H360" />
            <circle cx="80" cy="110" r="8" />
            <circle cx="160" cy="110" r="8" />
            <circle cx="240" cy="110" r="8" />
            <circle cx="320" cy="110" r="8" />
            <path d="M80 110 Q120 60 160 110 T240 110 T320 110" />
          </g>
        )}
      </svg>
    </div>
  );
}
