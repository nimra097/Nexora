export default function MetricCard({ title, value, trend, icon }) {
  const positive = parseFloat(trend) >= 0;
  return (
    <div
      style={{
        background: "var(--color-background-secondary)",
        borderRadius: "var(--border-radius-md)",
        padding: "1rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>{title}</p>
        <i className={`ti ${icon}`} style={{ fontSize: 18, color: "var(--color-text-tertiary)" }} aria-hidden="true" />
      </div>
      <p style={{ fontSize: 24, fontWeight: 500, margin: "0 0 6px" }}>{value}</p>
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: positive ? "var(--color-text-success)" : "var(--color-text-danger)",
        }}
      >
        <i className={`ti ${positive ? "ti-arrow-up-right" : "ti-arrow-down-right"}`} style={{ fontSize: 13, verticalAlign: -1 }} aria-hidden="true" />
        {" "}{trend} <span style={{ color: "var(--color-text-tertiary)", fontWeight: 400 }}>vs last month</span>
      </span>
    </div>
  );
}
