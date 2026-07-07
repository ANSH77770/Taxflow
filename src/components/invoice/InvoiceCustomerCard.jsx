import { useCustomerStore } from "../../store/useCustomerStore";

export default function InvoiceCustomerCard({ customerId }) {
  const customers = useCustomerStore((state) => state.customers);

  const customer = customers.find(
    (c) => c.id === customerId
  );

  if (!customer) {
    return (
      <div className="rounded-xl border bg-white p-6">
        <h2 className="text-xl font-semibold mb-4">
          Customer Details
        </h2>

        <p className="text-gray-500">
          Select a customer from the dropdown.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border bg-white p-6">

      <h2 className="text-xl font-semibold mb-6">
        Customer Details
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-sm text-gray-500">Customer</p>
          <p className="font-semibold">{customer.name}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">GSTIN</p>
          <p>{customer.gstin}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Phone</p>
          <p>{customer.phone}</p>
        </div>

        <div>
          <p className="text-sm text-gray-500">Email</p>
          <p>{customer.email}</p>
        </div>

        <div className="col-span-2">
          <p className="text-sm text-gray-500">Address</p>
          <p>{customer.address}</p>
        </div>

      </div>
    </div>
  );
}