export default function Pill({ children, color }) {
  return (
    <span
      className={color}
      style={{
        display: "inline-block",
        fontSize: 12,
        fontWeight: 500,
        padding: "2px 10px",
        borderRadius: "var(--border-radius-md)",
      }}
    >
      {children}
    </span>
  );
}
