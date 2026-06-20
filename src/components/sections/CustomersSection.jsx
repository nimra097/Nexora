import Card from "../ui/Card";
import Row from "../ui/Row";
import DetailPanel from "../DetailPanel";
import { CUSTOMERS } from "../../data/dashboardData";

export default function CustomersSection({ selectedCustomer, onOpenCustomer, onBack }) {
  if (selectedCustomer) {
    const c = selectedCustomer;
    return (
      <DetailPanel title={c.name} onBack={onBack}>
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div className="c-purple" style={{ width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500 }}>{c.avatar}</div>
            <div>
              <p style={{ fontWeight: 500, fontSize: 15, margin: 0 }}>{c.name}</p>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>{c.email}</p>
            </div>
          </div>
          <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
            <Row label="Total orders" value={c.orders} />
            <Row label="Total spent" value={c.spent} />
          </div>
        </Card>
      </DetailPanel>
    );
  }

  return (
    <div>
      <h1 style={{ margin: "0 0 16px" }}>Customers</h1>
      <Card style={{ padding: 0 }}>
        {CUSTOMERS.map((c, i) => (
          <button
            key={c.name}
            onClick={() => onOpenCustomer(c)}
            style={{
              display: "flex", alignItems: "center", gap: 12, width: "100%",
              padding: "14px 16px", border: "none", background: "transparent",
              borderBottom: i < CUSTOMERS.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
              borderRadius: 0,
              textAlign: "left", cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-background-secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div className="c-purple" style={{ width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500, flexShrink: 0 }}>{c.avatar}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>{c.name}</p>
              <p style={{ fontSize: 13, color: "var(--color-text-tertiary)", margin: 0 }}>{c.email}</p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: "0 0 2px" }}>{c.spent}</p>
              <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: 0 }}>{c.orders} orders</p>
            </div>
          </button>
        ))}
      </Card>
    </div>
  );
}
