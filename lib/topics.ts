export type Topic =
  | "Time"
  | "Identity"
  | "Structure"
  | "Memory"
  | "Perception"
  | "Language";

export const TOPICS: Topic[] = [
  "Time",
  "Identity",
  "Structure",
  "Memory",
  "Perception",
  "Language",
];

export const TOPIC_COLORS: Record<Topic, { light: string; dark: string }> = {
  Time:       { light: "#EEEDFE", dark: "#26215C" },
  Identity:   { light: "#E1F5EE", dark: "#04342C" },
  Structure:  { light: "#FAECE7", dark: "#4A1B0C" },
  Memory:     { light: "#FAEEDA", dark: "#412402" },
  Perception: { light: "#FBEAF0", dark: "#4B1528" },
  Language:   { light: "#E6F1FB", dark: "#042C53" },
};

export const TOPIC_INK: Record<Topic, string> = {
  Time: "#5b4fc4",
  Identity: "#0a8a6f",
  Structure: "#c45a36",
  Memory: "#b07418",
  Perception: "#c4467a",
  Language: "#1e6bb8",
};
