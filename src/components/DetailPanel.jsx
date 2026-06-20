export default function DetailPanel({ title, onBack, children }) {
  return (
    <div>
      <button onClick={onBack} style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 13, border: "none", background: "none", color: "var(--color-text-secondary)", padding: 0, marginBottom: 16, cursor: "pointer" }}>
        <i className="ti ti-arrow-left" style={{ fontSize: 14 }} aria-hidden="true" /> Back
      </button>
      <h1 style={{ margin: "0 0 16px" }}>{title}</h1>
      {children}
    </div>
  );
}
