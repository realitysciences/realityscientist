export function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col gap-4 text-xs" style={{ color: "var(--muted)" }}>
        <div className="italic leading-relaxed max-w-3xl">
          Theories on this site are published as possibilities, not as facts. For any
          given piece of reality there are multiple possibilities. They do not
          necessarily reflect the personal opinions of the author.
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div>© Dr. David Benson · An entity of Spheronaut</div>
          <div className="flex gap-5">
            <a href="https://relohu.com">ReLoHu</a>
            <a href="https://mindreport.ai">Mind Report</a>
            <a href="https://x.com/relohu">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
