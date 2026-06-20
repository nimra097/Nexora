import { NAV_ITEMS } from "../../data/dashboardData";

export default function Sidebar({ open, activeSection, onSelect }) {
  if (!open) return null;
  return (
    <aside
      style={{
        width: 224,
        flexShrink: 0,
        borderRight: "0.5px solid var(--color-border-tertiary)",
        padding: "16px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      {NAV_ITEMS.map((item) => {
        const active = item.id === activeSection;
        return (
          <button
            key={item.id}
            onClick={() => onSelect(item.id)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 12px",
              borderRadius: "var(--border-radius-md)",
              border: "0.5px solid transparent",
              background: active ? "var(--color-background-secondary)" : "transparent",
              color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)",
              fontSize: 14,
              fontWeight: active ? 500 : 400,
              textAlign: "left",
              cursor: "pointer",
            }}
          >
            <i className={`ti ${item.icon}`} style={{ fontSize: 17 }} aria-hidden="true" />
            {item.label}
          </button>
        );
      })}

      <div style={{ marginTop: "auto", paddingTop: 12, borderTop: "0.5px solid var(--color-border-tertiary)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "8px 12px" }}>
          <div
            className="c-purple"
            style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500 }}
          >
            JD
          </div>
          <div style={{ minWidth: 0 }}>
            <p style={{ fontSize: 13, fontWeight: 500, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Jane Doe</p>
            <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: 0 }}>Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
