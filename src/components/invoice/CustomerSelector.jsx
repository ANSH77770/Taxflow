import { useCustomerStore } from "../../store/useCustomerStore";
import { useInvoiceStore } from "../../store/useInvoiceStore";

export default function CustomerSelector({ value, onChange }) {
  const customers = useCustomerStore((state) => state.customers);

  const setCustomer = useInvoiceStore(
    (state) => state.setCustomer
  );

  function handleChange(e) {
    const selectedId = e.target.value;

    onChange(selectedId);      // Updates React state
    setCustomer(selectedId);   // Updates Zustand invoice store
  }

  return (
    <div className="space-y-2">
      <label className="font-medium">
        Customer
      </label>

      <select
        value={value}
        onChange={handleChange}
        className="w-full rounded-lg border p-3"
      >
        <option value="">
          Select Customer
        </option>

        {customers.map((customer) => (
          <option
            key={customer.id}
            value={customer.id}
          >
            {customer.name}
          </option>
        ))}
      </select>
    </div>
  );
}