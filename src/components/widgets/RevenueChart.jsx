import { useState } from "react";
import Card from "../ui/Card";
import { REVENUE_DATA } from "../../data/dashboardData";

export default function RevenueChart() {
  const max = Math.max(...REVENUE_DATA.map((d) => d.revenue));
  const H = 160, W = 500, pad = { l: 16, r: 16, t: 16, b: 8 };
  const barW = (W - pad.l - pad.r) / REVENUE_DATA.length;
  const [hovered, setHovered] = useState(null);

  return (
    <Card>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
        <div>
          <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: 0 }}>Revenue</p>
          <h2 style={{ margin: "2px 0 0" }}>
            $45,231{" "}
            <span style={{ fontSize: 13, fontWeight: 400, color: "var(--color-text-success)" }}>
              <i className="ti ti-arrow-up-right" style={{ fontSize: 13, verticalAlign: -1 }} aria-hidden="true" /> 12.5%
            </span>
          </h2>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["1M", "3M", "6M", "1Y"].map((t, i) => (
            <button
              key={t}
              style={{
                fontSize: 12,
                padding: "4px 10px",
                background: i === 2 ? "var(--color-background-secondary)" : "transparent",
                fontWeight: i === 2 ? 500 : 400,
                border: "0.5px solid var(--color-border-tertiary)",
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>
      <svg viewBox={`0 0 ${W} ${H + pad.t + pad.b + 20}`} style={{ width: "100%" }}>
        {[0.25, 0.5, 0.75, 1].map((f) => (
          <line
            key={f}
            x1={pad.l} x2={W - pad.r}
            y1={pad.t + H * (1 - f)} y2={pad.t + H * (1 - f)}
            stroke="var(--color-border-tertiary)"
            strokeDasharray="4,4"
          />
        ))}
        {REVENUE_DATA.map((d, i) => {
          const bh = (d.revenue / max) * H;
          const bx = pad.l + i * barW + barW * 0.22;
          const bw = barW * 0.56;
          const by = pad.t + H - bh;
          const isHov = hovered === i;
          return (
            <g key={d.month} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} style={{ cursor: "pointer" }}>
              <rect x={bx} y={by} width={bw} height={bh} rx="4" fill={isHov ? "#534AB7" : "#AFA9EC"} style={{ transition: "fill 0.15s" }} />
              {isHov && (
                <text x={bx + bw / 2} y={by - 8} textAnchor="middle" className="t" fontSize="11" fontWeight="500">
                  ${(d.revenue / 1000).toFixed(1)}k
                </text>
              )}
              <text x={bx + bw / 2} y={H + pad.t + 16} textAnchor="middle" className="ts" fontSize="11">{d.month}</text>
            </g>
          );
        })}
      </svg>
    </Card>
  );
}
