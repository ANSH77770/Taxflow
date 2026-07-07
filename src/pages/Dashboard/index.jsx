import DashboardCards from "../../components/dashboard/DashboardCards";
import RevenueGraph from "../../components/dashboard/RevenueGraph";
import RecentInvoices from "../../components/dashboard/RecentInvoices";

export default function Dashboard() {
  return (
    <div>
      <h1 className="mb-8 text-4xl font-bold">
        Dashboard
      </h1>

      <DashboardCards />

      <RevenueGraph />

      <RecentInvoices />
    </div>
  );
}