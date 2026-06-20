import { useState } from "react";
import Card from "../ui/Card";
import { CATEGORIES } from "../../data/dashboardData";

export default function DonutChart() {
  const r = 56, cx = 80, cy = 80, stroke = 16;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  const [hovered, setHovered] = useState(null);

  return (
    <Card>
      <p style={{ fontSize: 13, color: "var(--color-text-secondary)", margin: "0 0 2px" }}>Categories</p>
      <h2 style={{ margin: "0 0 16px" }}>Sales breakdown</h2>
      <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
        <svg width="160" height="160" style={{ flexShrink: 0 }}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke="var(--color-background-secondary)" strokeWidth={stroke} />
          {CATEGORIES.map((c, i) => {
            const dash = (c.pct / 100) * circ;
            const gap = circ - dash;
            const thisOffset = circ - offset;
            offset += dash;
            const isHov = hovered === i;
            return (
              <circle
                key={c.label}
                cx={cx} cy={cy} r={r} fill="none"
                stroke={c.color}
                strokeWidth={isHov ? stroke + 3 : stroke}
                strokeDasharray={`${dash} ${gap}`}
                strokeDashoffset={thisOffset}
                strokeLinecap="round"
                style={{ transition: "stroke-width 0.15s", cursor: "pointer" }}
                transform="rotate(-90 80 80)"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              />
            );
          })}
          {hovered !== null ? (
            <>
              <text x={cx} y={cy - 4} textAnchor="middle" className="t" fontSize="18" fontWeight="500">{CATEGORIES[hovered].pct}%</text>
              <text x={cx} y={cy + 14} textAnchor="middle" className="ts" fontSize="11">{CATEGORIES[hovered].label}</text>
            </>
          ) : (
            <>
              <text x={cx} y={cy - 2} textAnchor="middle" className="t" fontSize="15" fontWeight="500">Sales</text>
              <text x={cx} y={cy + 14} textAnchor="middle" className="ts" fontSize="11">by category</text>
            </>
          )}
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, flex: 1, minWidth: 140 }}>
          {CATEGORIES.map((c, i) => (
            <div
              key={c.label}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{ display: "flex", alignItems: "center", gap: 8, cursor: "pointer" }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: c.color, flexShrink: 0 }} />
              <span style={{ fontSize: 13, color: "var(--color-text-secondary)", flex: 1 }}>{c.label}</span>
              <span style={{ fontSize: 13, fontWeight: 500 }}>{c.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}
