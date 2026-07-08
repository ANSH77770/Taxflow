import DashboardCards from "../../components/dashboard/DashboardCards";
import RevenueGraph from "../../components/dashboard/RevenueGraph";
import RecentInvoices from "../../components/dashboard/RecentInvoices";

export default function Dashboard() {
  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back to TaxFlow.
          Here's your business overview.
        </p>

      </div>

      <DashboardCards />

      <div className="grid lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2">

          <RevenueGraph />

        </div>

      
      </div>
x
      <RecentInvoices />

    </div>

  );
}