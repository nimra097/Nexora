import Card from "../ui/Card";
import Pill from "../ui/Pill";
import { ORDERS, STATUS_STYLES } from "../../data/dashboardData";

export default function RecentOrders({ onOpenOrder, onViewAll }) {
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h2 style={{ margin: 0 }}>Recent orders</h2>
        <button onClick={onViewAll} style={{ fontSize: 13, border: "none", background: "none", color: "var(--color-text-info)", padding: 0, cursor: "pointer" }}>
          View all <i className="ti ti-arrow-right" style={{ fontSize: 12, verticalAlign: -1 }} aria-hidden="true" />
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {ORDERS.map((o) => (
          <button
            key={o.id}
            onClick={() => onOpenOrder(o)}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "10px 8px",
              border: "none",
              background: "transparent",
              borderRadius: "var(--border-radius-md)",
              textAlign: "left",
              cursor: "pointer",
              width: "100%",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-background-secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <div
              className="c-purple"
              style={{ width: 32, height: 32, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, flexShrink: 0 }}
            >
              {o.avatar}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{o.customer}</p>
              <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: 0, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{o.product}</p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: "0 0 4px" }}>{o.amount}</p>
              <Pill color={STATUS_STYLES[o.status]}>{o.status}</Pill>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}
