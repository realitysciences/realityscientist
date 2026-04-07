export function Footer() {
  return (
    <footer className="border-t mt-20" style={{ borderColor: "var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between gap-4 text-xs" style={{ color: "var(--muted)" }}>
        <div>© Dr. David Benson · An entity of Spheronaut</div>
        <div className="flex gap-5">
          <a href="https://relohu.com">ReLoHu</a>
          <a href="https://mindreport.ai">Mind Report</a>
          <a href="https://x.com/relohu">X</a>
        </div>
      </div>
    </footer>
  );
}
