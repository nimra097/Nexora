import Card from "../ui/Card";
import { PRODUCTS } from "../../data/dashboardData";

export default function TopProducts({ onOpenProduct, onViewAll }) {
  return (
    <Card>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
        <h2 style={{ margin: 0 }}>Top products</h2>
        <button onClick={onViewAll} style={{ fontSize: 13, border: "none", background: "none", color: "var(--color-text-info)", padding: 0, cursor: "pointer" }}>
          See all <i className="ti ti-arrow-right" style={{ fontSize: 12, verticalAlign: -1 }} aria-hidden="true" />
        </button>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {PRODUCTS.map((p) => (
          <button
            key={p.name}
            onClick={() => onOpenProduct(p)}
            style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 8px", border: "none", background: "transparent", borderRadius: "var(--border-radius-md)", textAlign: "left", cursor: "pointer", width: "100%" }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-background-secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span style={{ width: 20, textAlign: "center", fontSize: 12, fontWeight: 500, color: p.rank <= 3 ? "var(--color-text-info)" : "var(--color-text-tertiary)" }}>#{p.rank}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: "0 0 4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</p>
              <div style={{ height: 4, borderRadius: 2, background: "var(--color-background-secondary)" }}>
                <div style={{ height: "100%", borderRadius: 2, width: `${(p.sales / 1203) * 100}%`, background: "#7F77DD" }} />
              </div>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: "0 0 2px" }}>{p.revenue}</p>
              <p style={{ fontSize: 12, margin: 0, color: parseFloat(p.growth) >= 0 ? "var(--color-text-success)" : "var(--color-text-danger)" }}>{p.growth}</p>
            </div>
          </button>
        ))}
      </div>
    </Card>
  );
}
