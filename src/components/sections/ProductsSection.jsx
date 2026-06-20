import Card from "../ui/Card";
import Row from "../ui/Row";
import DetailPanel from "../DetailPanel";
import { PRODUCTS } from "../../data/dashboardData";

export default function ProductsSection({ selectedProduct, onOpenProduct, onBack }) {
  if (selectedProduct) {
    const p = selectedProduct;
    return (
      <DetailPanel title={p.name} onBack={onBack}>
        <Card>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Row label="Rank" value={`#${p.rank}`} />
            <Row label="Units sold" value={p.sales} />
            <Row label="Revenue" value={p.revenue} />
            <Row label="Growth" value={<span style={{ color: parseFloat(p.growth) >= 0 ? "var(--color-text-success)" : "var(--color-text-danger)" }}>{p.growth}</span>} />
          </div>
        </Card>
      </DetailPanel>
    );
  }

  return (
    <div>
      <h1 style={{ margin: "0 0 16px" }}>Products</h1>
      <Card style={{ padding: 0 }}>
        {PRODUCTS.map((p, i) => (
          <button
            key={p.name}
            onClick={() => onOpenProduct(p)}
            style={{
              display: "flex", alignItems: "center", gap: 12, width: "100%",
              padding: "14px 16px", border: "none", background: "transparent",
              borderBottom: i < PRODUCTS.length - 1 ? "0.5px solid var(--color-border-tertiary)" : "none",
              borderRadius: 0,
              textAlign: "left", cursor: "pointer",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-background-secondary)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            <span style={{ width: 24, fontSize: 13, fontWeight: 500, color: p.rank <= 3 ? "var(--color-text-info)" : "var(--color-text-tertiary)" }}>#{p.rank}</span>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: 0 }}>{p.name}</p>
              <p style={{ fontSize: 13, color: "var(--color-text-tertiary)", margin: 0 }}>{p.sales} sold</p>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ fontSize: 14, fontWeight: 500, margin: "0 0 2px" }}>{p.revenue}</p>
              <p style={{ fontSize: 12, margin: 0, color: parseFloat(p.growth) >= 0 ? "var(--color-text-success)" : "var(--color-text-danger)" }}>{p.growth}</p>
            </div>
          </button>
        ))}
      </Card>
    </div>
  );
}
