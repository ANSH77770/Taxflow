import { FileText, IndianRupee, Clock, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useInvoiceHistoryStore } from "../../store/useInvoiceHistoryStore";

export default function InvoiceStats() {
  const invoices = useInvoiceHistoryStore(
    (state) => state.invoices
  );

  const totalInvoices = invoices.length;

  const paidInvoices = invoices.filter(
    (invoice) => invoice.status === "Paid"
  ).length;

  const pendingInvoices = invoices.filter(
    (invoice) => invoice.status === "Pending"
  ).length;

  const totalRevenue = invoices.reduce(
    (sum, invoice) => sum + Number(invoice.total || 0),
    0
  );

  const cards = [
    {
      title: "Total Invoices",
      value: totalInvoices,
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Revenue",
      value: `₹${totalRevenue.toLocaleString("en-IN")}`,
      icon: IndianRupee,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Paid",
      value: paidInvoices,
      icon: CheckCircle2,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Pending",
      value: pendingInvoices,
      icon: Clock,
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

              <div className={`rounded-2xl p-4 ${card.color}`}>
                <Icon size={30} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}