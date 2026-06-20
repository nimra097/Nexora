import Card from "../ui/Card";
import Pill from "../ui/Pill";
import Row from "../ui/Row";
import DetailPanel from "../DetailPanel";
import { ORDERS, STATUS_STYLES } from "../../data/dashboardData";

export default function OrdersSection({ selectedOrder, onOpenOrder, onBack }) {
  if (selectedOrder) {
    const o = selectedOrder;
    return (
      <DetailPanel title={o.id} onBack={onBack}>
        <Card>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
            <div className="c-purple" style={{ width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 500 }}>{o.avatar}</div>
            <div>
              <p style={{ fontWeight: 500, fontSize: 15, margin: 0 }}>{o.customer}</p>
              <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>Placed {o.time}</p>
            </div>
          </div>
          <div style={{ borderTop: "0.5px solid var(--color-border-tertiary)", paddingTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
            <Row label="Product" value={o.product} />
            <Row label="Amount" value={o.amount} />
            <Row label="Status" value={<Pill color={STATUS_STYLES[o.status]}>{o.status}</Pill>} />
            <Row label="Order ID" value={o.id} />
          </div>
        </Card>
      </DetailPanel>
    );
  }

  return (
    <div>
      <h1 style={{ margin: "0 0 16px" }}>Orders</h1>
      <Card style={{ padding: 0 }}>
        {ORDERS.map((o, i) => (
          <button
            key={o.id}
            onClick={() => onOpenOrder(o)}
            style={{
              display: "flex", alignItems: "center", gap: 12, width: "100%",
              padding: "14px 16px", border: "none", background: "transparent",
              borderBottom: i < ORDERS.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
              borderRadius: 0,
              textAlign: "left", cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-background-secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div className="c-purple" style={{ width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500, flexShrink: 0 }}>{o.avatar}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>{o.customer} <span style={{ color: "var(--color-text-tertiary)", fontWeight: 400 }}>{o.id}</span></p>
              <p style={{ fontSize: 13, color: "var(--color-text-tertiary)", margin: 0 }}>{o.product}</p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: "0 0 4px" }}>{o.amount}</p>
              <Pill color={STATUS_STYLES[o.status]}>{o.status}</Pill>
            </div>
          </button>
        ))}
      </Card>
    </div>
  );
}
