import { useState, useRef } from "react";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import DashboardSection from "./components/sections/DashboardSection";
import OrdersSection from "./components/sections/OrdersSection";
import ProductsSection from "./components/sections/ProductsSection";
import CustomersSection from "./components/sections/CustomersSection";
import PlaceholderSection from "./components/sections/PlaceholderSection";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const rootRef = useRef(null);

  const handleSelect = (id) => {
    setActiveSection(id);
    setSelectedOrder(null);
    setSelectedProduct(null);
    setSelectedCustomer(null);
  };

  const handleFullscreen = () => {
    const el = rootRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.();
      setIsFullscreen(false);
    }
  };

  let content;
  if (activeSection === "dashboard") {
    content = (
      <DashboardSection
        onOpenOrder={(o) => { setActiveSection("orders"); setSelectedOrder(o); }}
        onOpenProduct={(p) => { setActiveSection("products"); setSelectedProduct(p); }}
        onSelect={handleSelect}
      />
    );
  } else if (activeSection === "orders") {
    content = <OrdersSection selectedOrder={selectedOrder} onOpenOrder={setSelectedOrder} onBack={() => setSelectedOrder(null)} />;
  } else if (activeSection === "products") {
    content = <ProductsSection selectedProduct={selectedProduct} onOpenProduct={setSelectedProduct} onBack={() => setSelectedProduct(null)} />;
  } else if (activeSection === "customers") {
    content = <CustomersSection selectedCustomer={selectedCustomer} onOpenCustomer={setSelectedCustomer} onBack={() => setSelectedCustomer(null)} />;
  } else if (activeSection === "analytics") {
    content = <PlaceholderSection title="Analytics" icon="ti-chart-bar" />;
  } else {
    content = <PlaceholderSection title="Settings" icon="ti-settings" />;
  }

  return (
    <div
      ref={rootRef}
      style={{
        minHeight: "100vh",
        background: "var(--color-background-tertiary)",
      }}
    >
      <style>{`
        @media (max-width: 700px) {
          .nx-search { display: none !important; }
          .nx-grid-2 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Navbar onMenuClick={() => setSidebarOpen((s) => !s)} onFullscreen={handleFullscreen} isFullscreen={isFullscreen} />

      <div style={{ display: "flex" }}>
        <Sidebar open={sidebarOpen} activeSection={activeSection} onSelect={handleSelect} />
        <main style={{ flex: 1, padding: "20px 24px", minWidth: 0 }}>
          {content}
        </main>
      </div>
    </div>
  );
}
