import { Card } from "@/components/ui/card";
import {
  IndianRupee,
  FileText,
  Users,
  Package,
} from "lucide-react";

import { useCustomerStore } from "../../store/useCustomerStore";
import { useProductStore } from "../../store/useProductStore";
import { useInvoiceHistoryStore } from "../../store/useInvoiceHistoryStore";

export default function DashboardCards() {

  const customers = useCustomerStore(
    (state) => state.customers
  );

  const products = useProductStore(
    (state) => state.products
  );

  const invoices = useInvoiceHistoryStore(
    (state) => state.invoices
  );
  console.log(invoices);

  const totalRevenue = invoices.reduce(
    (sum, invoice) =>
      sum + (Number(invoice?.totals?.total) || 0),
    0
  );

  const cards = [
    {
      title: "Total Revenue",
      value: `₹${totalRevenue.toLocaleString("en-IN")}`,
      icon: IndianRupee,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Invoices",
      value: invoices.length,
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Customers",
      value: customers.length,
      icon: Users,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Products",
      value: products.length,
      icon: Package,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="rounded-2xl border-0 p-6 shadow-md transition-all duration-300 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div
                className={`rounded-2xl p-4 ${card.color}`}
              >
                <Icon size={30} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}