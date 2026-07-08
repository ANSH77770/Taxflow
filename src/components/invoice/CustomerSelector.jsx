import { useCustomerStore } from "../../store/useCustomerStore";
import { useInvoiceStore } from "../../store/useInvoiceStore";

export default function CustomerSelector() {
  const customers = useCustomerStore(
    (state) => state.customers
  );

  const customer = useInvoiceStore(
    (state) => state.customer
  );

  const setCustomer = useInvoiceStore(
    (state) => state.setCustomer
  );

  return (
    <div className="space-y-2">

      <label className="font-medium">
        Customer
      </label>

      <select
        value={customer}
        onChange={(e) =>
          setCustomer(e.target.value)
        }
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