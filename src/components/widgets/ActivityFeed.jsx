import Card from "../ui/Card";
import { ACTIVITY } from "../../data/dashboardData";

export default function ActivityFeed() {
  return (
    <Card>
      <h2 style={{ margin: "0 0 14px" }}>Activity</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {ACTIVITY.map((a, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
            <span className={a.color} style={{ width: 8, height: 8, borderRadius: "50%", marginTop: 5, flexShrink: 0, background: "currentColor" }} />
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 14, margin: 0 }}>{a.msg}</p>
              <p style={{ fontSize: 12, color: "var(--color-text-tertiary)", margin: "2px 0 0" }}>{a.time}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
