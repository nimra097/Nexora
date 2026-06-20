import Card from "../ui/Card";

export default function PlaceholderSection({ title, icon }) {
  return (
    <div>
      <h1 style={{ margin: "0 0 16px" }}>{title}</h1>
      <Card>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px 0", color: "var(--color-text-tertiary)" }}>
          <i className={`ti ${icon}`} style={{ fontSize: 28, marginBottom: 10 }} aria-hidden="true" />
          <p style={{ fontSize: 14, margin: 0 }}>{title} section coming soon.</p>
        </div>
      </Card>
    </div>
  );
}
