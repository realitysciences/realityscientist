import { TOPIC_INK, type Topic } from "@/lib/topics";

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

  const custom = slug ? CUSTOM[slug] : undefined;

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        height: h,
        background: `var(--topic-${topic.toLowerCase()})`,
      }}
    >
      <svg viewBox="0 0 400 220" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        {custom ? custom(ink) : defaultArt(topic, ink)}
      </svg>
    </div>
  );
}

const CUSTOM: Record<string, (ink: string) => JSX.Element> = {
  "the-fish-do-not-see-what-we-see": (ink) => (
    <g stroke={ink} strokeWidth="1.4" fill="none">
      <path d="M0 40 Q50 30 100 40 T200 40 T300 40 T400 40" opacity="0.5" />
      <path d="M0 60 Q50 50 100 60 T200 60 T300 60 T400 60" opacity="0.4" />
      <path d="M0 195 Q50 185 100 195 T200 195 T300 195 T400 195" opacity="0.4" />
      <path d="M120 110 Q170 70 240 110 Q170 150 120 110 Z" />
      <path d="M120 110 L80 80 L95 110 L80 140 Z" />
      <circle cx="220" cy="105" r="3" fill={ink} />
      <path d="M150 110 Q170 100 190 110" />
      <path d="M280 150 Q310 130 345 150 Q310 170 280 150 Z" />
      <path d="M280 150 L260 135 L268 150 L260 165 Z" />
      <circle cx="335" cy="148" r="2" fill={ink} />
      <circle cx="260" cy="90" r="4" />
      <circle cx="270" cy="75" r="3" />
      <circle cx="278" cy="62" r="2" />
    </g>
  ),

  "the-beauty-of-bane": (ink) => (
    <g stroke={ink} strokeWidth="1.5" fill="none">
      {/* mask outline */}
      <path d="M150 80 Q200 60 250 80 L260 130 Q200 160 140 130 Z" />
      {/* mouth grille bars */}
      <line x1="170" y1="100" x2="170" y2="135" />
      <line x1="185" y1="95" x2="185" y2="140" />
      <line x1="200" y1="93" x2="200" y2="142" />
      <line x1="215" y1="95" x2="215" y2="140" />
      <line x1="230" y1="100" x2="230" y2="135" />
      {/* tubes */}
      <path d="M150 100 Q120 90 100 70" />
      <path d="M250 100 Q280 90 300 70" />
      <circle cx="100" cy="70" r="6" />
      <circle cx="300" cy="70" r="6" />
      {/* eye slits */}
      <line x1="165" y1="80" x2="190" y2="78" strokeWidth="2.5" />
      <line x1="210" y1="78" x2="235" y2="80" strokeWidth="2.5" />
    </g>
  ),

  "what-the-trees-are-tuned-to": (ink) => (
    <g stroke={ink} strokeWidth="1.4" fill="none">
      {/* trunk */}
      <path d="M195 200 L195 110 M205 200 L205 110" />
      {/* canopy as rings */}
      <circle cx="200" cy="90" r="55" />
      <circle cx="200" cy="90" r="42" opacity="0.7" />
      <circle cx="200" cy="90" r="28" opacity="0.5" />
      {/* roots */}
      <path d="M195 200 Q170 210 150 215" />
      <path d="M205 200 Q230 210 250 215" />
      <path d="M200 200 Q200 215 195 220" />
      {/* signal waves */}
      <path d="M40 90 Q70 85 100 90" opacity="0.5" />
      <path d="M30 110 Q70 100 110 110" opacity="0.4" />
      <path d="M300 90 Q330 85 360 90" opacity="0.5" />
      <path d="M290 110 Q330 100 370 110" opacity="0.4" />
    </g>
  ),

  "no-one-has-ever-met-anyone": (ink) => (
    <g stroke={ink} strokeWidth="1.4" fill="none">
      {/* two atoms / two people */}
      <circle cx="140" cy="110" r="28" />
      <circle cx="140" cy="110" r="6" fill={ink} />
      <circle cx="260" cy="110" r="28" />
      <circle cx="260" cy="110" r="6" fill={ink} />
      {/* repulsion field lines between */}
      <path d="M170 95 Q200 80 230 95" opacity="0.6" />
      <path d="M170 110 Q200 95 230 110" opacity="0.7" />
      <path d="M170 125 Q200 140 230 125" opacity="0.6" />
      <path d="M170 110 Q200 125 230 110" opacity="0.7" />
      {/* outer field */}
      <ellipse cx="200" cy="110" rx="90" ry="38" opacity="0.3" />
    </g>
  ),

  "the-mirror-they-refuse": (ink) => (
    <g stroke={ink} strokeWidth="1.5" fill="none">
      {/* mirror frame */}
      <rect x="150" y="50" width="100" height="130" rx="8" />
      <rect x="160" y="60" width="80" height="110" rx="4" opacity="0.4" />
      {/* arrow being deflected away */}
      <path d="M80 115 L150 115" strokeWidth="2" />
      <path d="M150 115 L260 60" strokeWidth="2" />
      <path d="M255 58 L266 58 L262 67 Z" fill={ink} stroke="none" />
      {/* small figure on receiving end */}
      <circle cx="305" cy="55" r="6" />
      <path d="M305 61 L305 78" />
    </g>
  ),

  "the-machinery-of-familiar": (ink) => (
    <g stroke={ink} strokeWidth="1.3" fill="none">
      {/* filing cabinet drawers */}
      <rect x="130" y="40" width="140" height="160" />
      <line x1="130" y1="80" x2="270" y2="80" />
      <line x1="130" y1="120" x2="270" y2="120" />
      <line x1="130" y1="160" x2="270" y2="160" />
      {/* drawer handles */}
      <circle cx="200" cy="60" r="3" fill={ink} />
      <circle cx="200" cy="100" r="3" fill={ink} />
      <circle cx="200" cy="140" r="3" fill={ink} />
      <circle cx="200" cy="180" r="3" fill={ink} />
      {/* the one drawer slightly open showing label */}
      <line x1="125" y1="100" x2="135" y2="100" />
      {/* exclamation outside trying to get noticed */}
      <circle cx="50" cy="110" r="14" />
      <line x1="50" y1="103" x2="50" y2="113" strokeWidth="2" />
      <circle cx="50" cy="118" r="1.5" fill={ink} />
      {/* same on right side */}
      <circle cx="350" cy="110" r="14" opacity="0.5" />
    </g>
  ),

  "the-witness-theorem": (ink) => (
    <g stroke={ink} strokeWidth="1.4" fill="none">
      {/* left: cloud of dots representing possibility terrain */}
      {[30, 45, 55, 70, 40, 60, 50, 35, 65].map((x, i) => (
        <circle key={`p${i}`} cx={x + (i % 3) * 10} cy={70 + (i % 4) * 30} r={2 + (i % 3)} opacity={0.3 + (i % 3) * 0.1} />
      ))}
      {/* crystallization front: vertical dashed line */}
      <line x1="160" y1="40" x2="160" y2="190" strokeDasharray="6 4" strokeWidth="2" opacity="0.7" />
      {/* eye/witness symbol at the front */}
      <ellipse cx="200" cy="110" rx="30" ry="20" />
      <circle cx="200" cy="110" r="9" fill={ink} opacity="0.4" />
      <circle cx="200" cy="110" r="4" fill={ink} />
      {/* right: crystallized geometric shapes (reality/residue) */}
      <rect x="270" y="70" width="25" height="25" transform="rotate(15 282 82)" opacity="0.7" />
      <polygon points="320,55 340,95 300,95" opacity="0.6" />
      <rect x="350" y="80" width="20" height="20" opacity="0.5" />
      <polygon points="280,140 310,130 305,165 275,160" opacity="0.6" />
      <rect x="335" y="130" width="18" height="18" transform="rotate(-10 344 139)" opacity="0.5" />
      {/* arrows from front to crystals */}
      <path d="M230 100 L265 85" strokeDasharray="3 3" opacity="0.4" />
      <path d="M230 115 L270 145" strokeDasharray="3 3" opacity="0.4" />
      <path d="M230 105 L310 70" strokeDasharray="3 3" opacity="0.3" />
    </g>
  ),

  "musk-as-process": (ink) => (
    <g stroke={ink} strokeWidth="1.4" fill="none">
      {/* head silhouette as a node in a flow diagram */}
      <circle cx="200" cy="110" r="38" />
      {/* process arrows feeding in from left (inputs: risk, time, effort) */}
      <path d="M30 60 L160 95" />
      <path d="M30 110 L160 110" />
      <path d="M30 160 L160 130" />
      {/* arrowheads on input lines */}
      <path d="M156 92 L165 95 L158 101 Z" fill={ink} stroke="none" />
      <path d="M156 107 L165 110 L156 113 Z" fill={ink} stroke="none" />
      <path d="M156 127 L165 130 L158 135 Z" fill={ink} stroke="none" />
      {/* output arrows on the right (technologies pushed forward) */}
      <path d="M240 80 L370 50" />
      <path d="M240 110 L370 110" />
      <path d="M240 140 L370 170" />
      <path d="M362 47 L372 49 L366 56 Z" fill={ink} stroke="none" />
      <path d="M362 107 L372 110 L362 113 Z" fill={ink} stroke="none" />
      <path d="M362 167 L372 170 L364 175 Z" fill={ink} stroke="none" />
      {/* small gear/process indicator inside the circle */}
      <circle cx="200" cy="110" r="14" />
      <line x1="200" y1="96" x2="200" y2="124" />
      <line x1="186" y1="110" x2="214" y2="110" />
      <line x1="190" y1="100" x2="210" y2="120" />
      <line x1="210" y1="100" x2="190" y2="120" />
    </g>
  ),

  "kardashev-irony": (ink) => (
    <g stroke={ink} strokeWidth="1.4" fill="none">
      {/* three-tier bar chart representing Type I, II, III */}
      {/* Type III bar (tallest, right) */}
      <rect x="290" y="40" width="50" height="155" opacity="0.25" />
      <text x="315" y="210" textAnchor="middle" fontSize="9" fill={ink} opacity="0.6" fontFamily="sans-serif">III</text>
      {/* Type II bar (medium, center) */}
      <rect x="220" y="90" width="50" height="105" opacity="0.25" />
      <text x="245" y="210" textAnchor="middle" fontSize="9" fill={ink} opacity="0.6" fontFamily="sans-serif">II</text>
      {/* Type I bar (smaller, left-center) */}
      <rect x="150" y="130" width="50" height="65" opacity="0.25" />
      <text x="175" y="210" textAnchor="middle" fontSize="9" fill={ink} opacity="0.6" fontFamily="sans-serif">I</text>
      {/* Current human bar (tiny stub, far left) */}
      <rect x="80" y="183" width="50" height="12" fill={ink} opacity="0.6" />
      <text x="105" y="210" textAnchor="middle" fontSize="9" fill={ink} fontFamily="sans-serif">0.73</text>
      {/* baseline */}
      <line x1="60" y1="195" x2="370" y2="195" strokeWidth="1.5" />
      {/* arrow pointing wistfully from the tiny bar toward the tall ones */}
      <path d="M130 189 Q200 160 275 100" strokeDasharray="5 4" opacity="0.5" />
      <path d="M272 97 L282 96 L278 106 Z" fill={ink} stroke="none" opacity="0.5" />
    </g>
  ),

  "the-star-that-forgot": (ink) => (
    <g stroke={ink} strokeWidth="1.4" fill="none">
      {/* large star burst in center */}
      {[...Array(12)].map((_, i) => {
        const a = (i / 12) * Math.PI * 2;
        const inner = 22;
        const outer = 52;
        return (
          <line
            key={i}
            x1={200 + Math.cos(a) * inner}
            y1={110 + Math.sin(a) * inner}
            x2={200 + Math.cos(a) * outer}
            y2={110 + Math.sin(a) * outer}
            opacity={0.5 + (i % 3) * 0.15}
          />
        );
      })}
      <circle cx="200" cy="110" r="22" />
      <circle cx="200" cy="110" r="10" fill={ink} opacity="0.3" />
      {/* smaller distant stars scattered */}
      <circle cx="60" cy="45" r="3" fill={ink} opacity="0.7" />
      <circle cx="330" cy="55" r="4" fill={ink} opacity="0.6" />
      <circle cx="85" cy="170" r="2.5" fill={ink} opacity="0.5" />
      <circle cx="350" cy="175" r="3" fill={ink} opacity="0.7" />
      <circle cx="130" cy="35" r="2" fill={ink} opacity="0.5" />
      <circle cx="280" cy="30" r="2.5" fill={ink} opacity="0.6" />
      <circle cx="40" cy="115" r="2" fill={ink} opacity="0.4" />
      <circle cx="370" cy="130" r="2" fill={ink} opacity="0.4" />
      {/* dotted trail from one distant star down to center, suggesting origin */}
      <path d="M330 55 Q280 75 240 95" strokeDasharray="4 5" opacity="0.4" />
      {/* human silhouette inside the star (tiny, gestural) */}
      <circle cx="200" cy="101" r="3.5" />
      <line x1="200" y1="104" x2="200" y2="116" />
      <path d="M194 108 L206 108" />
      <path d="M200 116 L196 122 M200 116 L204 122" />
    </g>
  ),

  "vr-inside-vr": (ink) => (
    <g stroke={ink} strokeWidth="1.4" fill="none">
      {/* outer headset shape */}
      <rect x="60" y="75" width="280" height="80" rx="14" />
      <path d="M60 105 Q40 110 35 120 Q40 130 60 135" />
      <path d="M340 105 Q360 110 365 120 Q360 130 340 135" />
      {/* two lenses */}
      <ellipse cx="155" cy="115" rx="45" ry="30" />
      <ellipse cx="245" cy="115" rx="45" ry="30" />
      {/* inner screen inside left lens: another headset, tiny */}
      <rect x="120" y="98" width="70" height="34" rx="6" strokeWidth="1" opacity="0.7" />
      <ellipse cx="143" cy="115" rx="13" ry="11" strokeWidth="1" opacity="0.7" />
      <ellipse cx="177" cy="115" rx="13" ry="11" strokeWidth="1" opacity="0.7" />
      {/* inner screen inside right lens: same tiny headset */}
      <rect x="210" y="98" width="70" height="34" rx="6" strokeWidth="1" opacity="0.7" />
      <ellipse cx="233" cy="115" rx="13" ry="11" strokeWidth="1" opacity="0.7" />
      <ellipse cx="267" cy="115" rx="13" ry="11" strokeWidth="1" opacity="0.7" />
      {/* bridge */}
      <line x1="200" y1="108" x2="200" y2="122" />
      {/* strap lines */}
      <path d="M340 90 Q370 90 380 110" opacity="0.5" />
      <path d="M60 90 Q30 90 20 110" opacity="0.5" />
    </g>
  ),

  "fairness-is-a-human-word": (ink) => (
    <g stroke={ink} strokeWidth="1.5" fill="none">
      {/* unbalanced scale */}
      <line x1="200" y1="50" x2="200" y2="180" />
      {/* tilted beam */}
      <line x1="120" y1="80" x2="280" y2="60" strokeWidth="2" />
      {/* left pan (heavy, low) */}
      <line x1="120" y1="80" x2="120" y2="120" />
      <path d="M90 120 Q120 140 150 120" />
      {/* right pan (light, high) */}
      <line x1="280" y1="60" x2="280" y2="90" />
      <path d="M255 90 Q280 105 305 90" />
      {/* base */}
      <path d="M170 180 L230 180" strokeWidth="2" />
      <path d="M180 180 L195 195 M220 180 L205 195" />
    </g>
  ),
};

function defaultArt(topic: Topic, ink: string) {
  if (topic === "Time") {
    return (
      <g stroke={ink} strokeWidth="1.4" fill="none">
        {[...Array(7)].map((_, i) => (
          <circle key={i} cx="200" cy="110" r={20 + i * 18} opacity={0.7 - i * 0.08} />
        ))}
      </g>
    );
  }
  if (topic === "Identity") {
    return (
      <g stroke={ink} strokeWidth="1.4" fill="none">
        <circle cx="160" cy="110" r="60" />
        <circle cx="240" cy="110" r="60" />
      </g>
    );
  }
  if (topic === "Structure") {
    return (
      <g stroke={ink} strokeWidth="1.2" fill="none">
        {[...Array(8)].map((_, i) =>
          [...Array(5)].map((_, j) => (
            <rect key={`${i}-${j}`} x={20 + i * 45} y={20 + j * 38} width="30" height="24" />
          ))
        )}
      </g>
    );
  }
  if (topic === "Memory") {
    return (
      <g stroke={ink} strokeWidth="1.4" fill="none">
        <path d="M20 180 Q100 20 200 110 T380 40" />
        <path d="M20 200 Q100 60 200 130 T380 80" opacity="0.6" />
      </g>
    );
  }
  if (topic === "Perception") {
    return (
      <g stroke={ink} strokeWidth="1.2" fill="none">
        {[...Array(12)].map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return (
            <line key={i} x1="200" y1="110" x2={200 + Math.cos(a) * 100} y2={110 + Math.sin(a) * 100} />
          );
        })}
        <circle cx="200" cy="110" r="20" />
      </g>
    );
  }
  if (topic === "Ontology") {
    return (
      <g stroke={ink} strokeWidth="1.4" fill="none">
        {/* nested diamonds representing layers of reality */}
        <rect x="160" y="70" width="80" height="80" transform="rotate(45 200 110)" />
        <rect x="170" y="80" width="60" height="60" transform="rotate(45 200 110)" opacity="0.7" />
        <rect x="180" y="90" width="40" height="40" transform="rotate(45 200 110)" opacity="0.5" />
        <circle cx="200" cy="110" r="5" fill={ink} opacity="0.5" />
      </g>
    );
  }
  return (
    <g stroke={ink} strokeWidth="1.4" fill="none">
      <path d="M40 110 H360" />
      <circle cx="80" cy="110" r="8" />
      <circle cx="160" cy="110" r="8" />
      <circle cx="240" cy="110" r="8" />
      <circle cx="320" cy="110" r="8" />
      <path d="M80 110 Q120 60 160 110 T240 110 T320 110" />
    </g>
  );
}
