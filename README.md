# Nexora Dashboard

Minimal-aesthetic e-commerce admin dashboard built with React + Vite + Tailwind.

## Setup

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/dashboardData.js        # all sample data (metrics, orders, products, customers...)
  components/
    ui/                         # Card, Pill, Row - small reusable pieces
    layout/                      # Navbar, Sidebar
    widgets/                     # MetricCard, RevenueChart, DonutChart, RecentOrders, TopProducts, ActivityFeed
    sections/                    # DashboardSection, OrdersSection, ProductsSection, CustomersSection, PlaceholderSection
    DetailPanel.jsx               # shared "back + detail" view
  App.jsx                        # root: routing between sections + sidebar/fullscreen state
  main.jsx                       # React entry point
  index.css                      # Tailwind + theme CSS variables (light/dark)
index.html                       # loads Tabler icons CDN
```

## Features

- Click any sidebar item (Dashboard, Orders, Products, Customers, Analytics, Settings) to switch sections
- Click a row in "Recent orders" / "Top products" to open its detail view
- Hamburger icon toggles the sidebar
- Maximize icon toggles browser fullscreen
- Light/dark mode automatic via `prefers-color-scheme`
"# Nexora" 
"# Commerence-dashboard" 
