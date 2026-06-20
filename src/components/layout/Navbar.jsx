export default function Navbar({ onMenuClick, onFullscreen, isFullscreen }) {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        height: 56,
        background: "var(--color-background-primary)",
        borderBottom: "0.5px solid var(--color-border-tertiary)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button
          onClick={onMenuClick}
          aria-label="Toggle sidebar"
          style={{ width: 36, height: 36, padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <i className="ti ti-menu-2" style={{ fontSize: 18 }} aria-hidden="true" />
        </button>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          {/* <div
            className="c-purple"
            style={{
              width: 28,
              height: 28,
              borderRadius: "var(--border-radius-md)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="ti ti-bolt" style={{ fontSize: 15 }} aria-hidden="true" />
          </div> */}
          <span style={{ fontWeight: 500, fontSize: 16 }}>NIMCOM</span>
        </div>
      </div>

      <div style={{ flex: 1, maxWidth: 360, margin: "0 24px" }} className="nx-search">
        <div style={{ position: "relative" }}>
          <i className="ti ti-search" style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", fontSize: 15, color: "var(--color-text-tertiary)" }} aria-hidden="true" />
          <input type="text" placeholder="Search products, orders..." style={{ width: "100%", paddingLeft: 32 }} />
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <button
          onClick={onFullscreen}
          aria-label="Toggle fullscreen"
          style={{ width: 36, height: 36, padding: 0, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <i className={`ti ${isFullscreen ? "ti-minimize" : "ti-maximize"}`} style={{ fontSize: 17 }} aria-hidden="true" />
        </button>
        <button aria-label="Notifications" style={{ width: 36, height: 36, padding: 0, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <i className="ti ti-bell" style={{ fontSize: 17 }} aria-hidden="true" />
          <span style={{ position: "absolute", top: 8, right: 8, width: 6, height: 6, borderRadius: "50%", background: "var(--color-text-info)" }} />
        </button>
        <div
          className="c-purple"
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 12,
            fontWeight: 500,
          }}
        >
          JD
        </div>
      </div>
    </header>
  );
}
