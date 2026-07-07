import { Users, BadgeCheck, UserPlus } from "lucide-react";
import { useCustomerStore } from "../../store/useCustomerStore";

export default function CustomerStats() {
  const customers = useCustomerStore((state) => state.customers);

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <div className="rounded-xl border bg-white p-6 shadow">
        <Users className="mb-3 text-blue-600" size={30} />
        <h2 className="text-3xl font-bold">
          {customers.length}
        </h2>
        <p className="text-gray-500">Total Customers</p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow">
        <BadgeCheck className="mb-3 text-green-600" size={30} />
        <h2 className="text-3xl font-bold">
          {customers.length}
        </h2>
        <p className="text-gray-500">GST Registered</p>
      </div>

      <div className="rounded-xl border bg-white p-6 shadow">
        <UserPlus className="mb-3 text-purple-600" size={30} />
        <h2 className="text-3xl font-bold">2</h2>
        <p className="text-gray-500">New This Month</p>
      </div>
    </div>
  );
}