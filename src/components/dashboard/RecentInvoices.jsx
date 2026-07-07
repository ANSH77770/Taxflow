import { Card } from "@/components/ui/card";

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
];

export default function RecentInvoices() {
  return (
    <Card className="mt-8 rounded-2xl p-6">
      <h2 className="mb-6 text-2xl font-bold">
        Recent Invoices
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="py-3 text-left">Invoice</th>
            <th className="text-left">Customer</th>
            <th className="text-left">Amount</th>
            <th className="text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id} className="border-b">
              <td className="py-4">{invoice.id}</td>
              <td>{invoice.customer}</td>
              <td>{invoice.amount}</td>
              <td>{invoice.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}