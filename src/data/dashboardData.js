export const METRICS = [
  { title: "Total Revenue", value: "$45,231", trend: "+12.5%", icon: "ti-currency-dollar" },
  { title: "Total Orders", value: "2,840", trend: "+8.2%", icon: "ti-shopping-cart" },
  { title: "Active Customers", value: "12,403", trend: "+3.1%", icon: "ti-users" },
  { title: "Conversion Rate", value: "3.68%", trend: "-0.4%", icon: "ti-chart-line" },
];

export const REVENUE_DATA = [
  { month: "Jan", revenue: 32000 },
  { month: "Feb", revenue: 28500 },
  { month: "Mar", revenue: 38000 },
  { month: "Apr", revenue: 42000 },
  { month: "May", revenue: 39500 },
  { month: "Jun", revenue: 45231 },
];

export const CATEGORIES = [
  { label: "Electronics", pct: 38, color: "#534AB7" },
  { label: "Apparel", pct: 27, color: "#1D9E75" },
  { label: "Home & Garden", pct: 20, color: "#D85A30" },
  { label: "Other", pct: 15, color: "#888780" },
];

export const ORDERS = [
  { id: "#ORD-8841", customer: "Alex Morgan", product: "MacBook Pro 14″", amount: "$1,999", status: "Delivered", avatar: "AM", time: "2m ago" },
  { id: "#ORD-8840", customer: "Sam Rivera", product: "Sony WH-1000XM5", amount: "$349", status: "Processing", avatar: "SR", time: "18m ago" },
  { id: "#ORD-8839", customer: "Jamie Chen", product: "Nike Air Max 2024", amount: "$159", status: "Shipped", avatar: "JC", time: "1h ago" },
  { id: "#ORD-8838", customer: "Dana Park", product: "iPad Air M2", amount: "$749", status: "Delivered", avatar: "DP", time: "3h ago" },
  { id: "#ORD-8837", customer: "Riley Scott", product: "Aeron Chair", amount: "$1,495", status: "Cancelled", avatar: "RS", time: "5h ago" },
];

export const PRODUCTS = [
  { name: "MacBook Pro 14″", sales: 483, revenue: "$965k", growth: "+22%", rank: 1 },
  { name: "iPhone 16 Pro", sales: 741, revenue: "$889k", growth: "+15%", rank: 2 },
  { name: "AirPods Pro 3", sales: 1203, revenue: "$479k", growth: "+34%", rank: 3 },
  { name: "iPad Air M2", sales: 328, revenue: "$246k", growth: "+8%", rank: 4 },
  { name: "Samsung 4K TV", sales: 167, revenue: "$201k", growth: "-3%", rank: 5 },
];

export const CUSTOMERS = [
  { name: "Alex Morgan", email: "alex.morgan@mail.com", orders: 14, spent: "$4,820", avatar: "AM" },
  { name: "Sam Rivera", email: "sam.rivera@mail.com", orders: 9, spent: "$2,140", avatar: "SR" },
  { name: "Jamie Chen", email: "jamie.chen@mail.com", orders: 22, spent: "$7,990", avatar: "JC" },
  { name: "Dana Park", email: "dana.park@mail.com", orders: 5, spent: "$1,250", avatar: "DP" },
  { name: "Riley Scott", email: "riley.scott@mail.com", orders: 11, spent: "$3,610", avatar: "RS" },
];

export const ACTIVITY = [
  { msg: "New order #8842 from Chris Wu", time: "Just now", color: "c-purple" },
  { msg: "5-star review on AirPods Pro 3", time: "4m ago", color: "c-teal" },
  { msg: "MacBook Pro 14″ low stock alert", time: "22m ago", color: "c-amber" },
  { msg: "Refund processed for #8801", time: "1h ago", color: "c-red" },
  { msg: "Monthly revenue target reached", time: "2h ago", color: "c-blue" },
];

export const STATUS_STYLES = {
  Delivered: "c-teal",
  Processing: "c-blue",
  Shipped: "c-purple",
  Cancelled: "c-red",
};

export const NAV_ITEMS = [
  { id: "dashboard", icon: "ti-layout-dashboard", label: "Dashboard" },
  { id: "orders", icon: "ti-shopping-cart", label: "Orders" },
  { id: "products", icon: "ti-package", label: "Products" },
  { id: "customers", icon: "ti-users", label: "Customers" },
  { id: "analytics", icon: "ti-chart-bar", label: "Analytics" },
  { id: "settings", icon: "ti-settings", label: "Settings" },
];
