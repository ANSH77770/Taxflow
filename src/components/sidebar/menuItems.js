import {
  LayoutDashboard,
  Users,
  Package,
  Receipt,
  BarChart3,
  Settings,
} from "lucide-react";

export const menuItems = [
  { title: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { title: "Customers", path: "/customers", icon: Users },
  { title: "Products", path: "/products", icon: Package },
  { title: "Invoices", path: "/invoices", icon: Receipt },
  { title: "Reports", path: "/reports", icon: BarChart3 },
  { title: "Settings", path: "/settings", icon: Settings },
];