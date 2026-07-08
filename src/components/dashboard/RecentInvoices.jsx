import { Card } from "@/components/ui/card";
import { BadgeCheck, Clock3 } from "lucide-react";

const invoices = [
  {
    id: "INV-1001",
    customer: "ABC Traders",
    amount: "₹12,500",
    status: "Paid",
  },
  {
    id: "INV-1002",
    customer: "XYZ Pvt Ltd",
    amount: "₹8,900",
    status: "Pending",
  },
  {
    id: "INV-1003",
    customer: "Tech Solutions",
    amount: "₹21,300",
    status: "Paid",
  },
  {
    id: "INV-1004",
    customer: "Global Retail",
    amount: "₹18,900",
    status: "Pending",
  },
  {
    id: "INV-1005",
    customer: "Sunrise Mart",
    amount: "₹5,700",
    status: "Paid",
  },
];

export default function RecentInvoices() {
  return (
    <Card className="rounded-2xl p-6 shadow-md">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-2xl font-bold">
          Recent Invoices
        </h2>

        <button className="text-blue-600 hover:underline">
          View All
        </button>

      </div>

      <table className="w-full">

        <thead>

          <tr className="border-b text-gray-500">

            <th className="text-left py-3">
              Invoice
            </th>

            <th className="text-left">
              Customer
            </th>

            <th className="text-left">
              Amount
            </th>

            <th className="text-center">
              Status
            </th>

          </tr>

        </thead>

        <tbody>

          {invoices.map((invoice) => (

            <tr
              key={invoice.id}
              className="border-b hover:bg-slate-50"
            >

              <td className="py-4 font-medium">
                {invoice.id}
              </td>

              <td>
                {invoice.customer}
              </td>

              <td className="font-semibold">
                {invoice.amount}
              </td>

              <td className="text-center">

                {invoice.status === "Paid" ? (

                  <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-green-700 text-sm">

                    <BadgeCheck size={16} />

                    Paid

                  </span>

                ) : (

                  <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-3 py-1 text-yellow-700 text-sm">

                    <Clock3 size={16} />

                    Pending

                  </span>

                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </Card>
  );
}