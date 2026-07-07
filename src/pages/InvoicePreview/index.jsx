import { useInvoiceStore } from "../../store/useInvoiceStore";
import { useCustomerStore } from "../../store/useCustomerStore";
import { calculateInvoice } from "../../utils/invoiceCalculations";

export default function InvoicePreview() {
  const customerId = useInvoiceStore((state) => state.customer);
  const items = useInvoiceStore((state) => state.items);
  const shipping = useInvoiceStore((state) => state.shipping);
  const roundOff = useInvoiceStore((state) => state.roundOff);

  const customer = useCustomerStore((state) =>
    state.customers.find((c) => c.id === customerId)
  );

  const totals = calculateInvoice(items, shipping, roundOff);

  return (
    <div className="mx-auto max-w-6xl rounded-xl bg-white p-10 shadow">

      {/* Header */}

      <div className="mb-10 flex justify-between">

        <div>

          <h1 className="text-4xl font-bold text-blue-700">
            TAXFLOW
          </h1>

          <p className="text-gray-500">
            GST Invoice
          </p>

        </div>

        <div className="text-right">

          <h2 className="text-xl font-semibold">
            Invoice Preview
          </h2>

          <p>
            Invoice No :
            {" "}
            INV-
            {Date.now().toString().slice(-6)}
          </p>

          <p>
            Date :
            {" "}
            {new Date().toLocaleDateString("en-IN")}
          </p>

        </div>

      </div>

      {/* Customer */}

      <div className="mb-8 rounded-lg border p-5">

        <h3 className="mb-3 font-semibold">
          Bill To
        </h3>

        <p>{customer?.name}</p>

        <p>{customer?.phone}</p>

        <p>{customer?.email}</p>

        <p>{customer?.gstin}</p>

      </div>

      {/* Table */}

      <table className="w-full border">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-3">SKU</th>

            <th>Product</th>

            <th>Qty</th>

            <th>Rate</th>

            <th>GST</th>

            <th>Total</th>

          </tr>

        </thead>

        <tbody>

          {items.map((item) => (

            <tr key={item.id} className="border-t">

              <td className="p-3">
                {item.sku}
              </td>

              <td>
                {item.name}
              </td>

              <td>
                {item.qty}
              </td>

              <td>
                ₹{item.price}
              </td>

              <td>
                {item.gst}%
              </td>

              <td>
                ₹
                {(
                  item.price *
                  item.qty *
                  (1 - item.discount / 100) *
                  (1 + item.gst / 100)
                ).toFixed(2)}
              </td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* Totals */}

      <div className="mt-10 ml-auto w-96 rounded-lg border p-6">

        <div className="mb-2 flex justify-between">

          <span>Subtotal</span>

          <span>
            ₹{totals.subtotal.toFixed(2)}
          </span>

        </div>

        <div className="mb-2 flex justify-between">

          <span>Discount</span>

          <span>
            ₹{totals.discount.toFixed(2)}
          </span>

        </div>

        <div className="mb-2 flex justify-between">

          <span>CGST</span>

          <span>
            ₹{totals.cgst.toFixed(2)}
          </span>

        </div>

        <div className="mb-2 flex justify-between">

          <span>SGST</span>

          <span>
            ₹{totals.sgst.toFixed(2)}
          </span>

        </div>

        <div className="mb-2 flex justify-between">

          <span>Shipping</span>

          <span>
            ₹{totals.shipping.toFixed(2)}
          </span>

        </div>

        <hr className="my-4" />

        <div className="flex justify-between text-2xl font-bold">

          <span>Grand Total</span>

          <span>
            ₹{totals.total.toFixed(2)}
          </span>

        </div>

      </div>

    </div>
  );
}