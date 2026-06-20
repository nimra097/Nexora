import MetricCard from "../widgets/MetricCard";
import RevenueChart from "../widgets/RevenueChart";
import DonutChart from "../widgets/DonutChart";
import RecentOrders from "../widgets/RecentOrders";
import TopProducts from "../widgets/TopProducts";
import ActivityFeed from "../widgets/ActivityFeed";
import { METRICS } from "../../data/dashboardData";

export default function DashboardSection({ onOpenOrder, onOpenProduct, onSelect }) {
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 4px" }}>Overview</p>
        <h1 style={{ margin: "0 0 4px" }}>Good morning, Nimra</h1>
        <p style={{ fontSize: 14, color: "var(--color-text-tertiary)", margin: 0 }}>Here's what's happening with your store today.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, marginBottom: 16 }}>
        {METRICS.map((m) => <MetricCard key={m.title} {...m} />)}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 16 }} className="nx-grid-2">
        <RevenueChart />
        <DonutChart />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 16 }} className="nx-grid-2">
        <RecentOrders onOpenOrder={onOpenOrder} onViewAll={() => onSelect("orders")} />
        <TopProducts onOpenProduct={onOpenProduct} onViewAll={() => onSelect("products")} />
      </div>

      <ActivityFeed />
    </>
  );
}
