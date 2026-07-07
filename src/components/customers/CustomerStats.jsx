import { Users, BadgeCheck, UserPlus } from "lucide-react";
import { useCustomerStore } from "../../store/useCustomerStore";

export default function CustomerStats() {
  const customers = useCustomerStore((state) => state.customers);

  const totalCustomers = customers.length;

  const gstRegistered = customers.filter(
    (customer) => customer.gstin.trim() !== ""
  ).length;

  const newCustomers = customers.slice(-3).length;

  const stats = [
    {
      title: "Total Customers",
      value: totalCustomers,
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "GST Registered",
      value: gstRegistered,
      icon: BadgeCheck,
      color: "text-green-600",
    },
    {
      title: "New Customers",
      value: newCustomers,
      icon: UserPlus,
      color: "text-purple-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-xl bg-white border shadow-sm p-6"
          >
            <Icon className={`${item.color} mb-3`} size={32} />

            <h2 className="text-3xl font-bold">{item.value}</h2>

            <p className="text-gray-500">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
}