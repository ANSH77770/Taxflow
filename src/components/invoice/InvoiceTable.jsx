import { useInvoiceStore } from "../../store/useInvoiceStore";
import { calculateItemTotal } from "../../utils/invoiceCalculations";
import { Trash2 } from "lucide-react";

export default function InvoiceTable() {
  const items = useInvoiceStore((state) => state.items);
  const removeProduct = useInvoiceStore((state) => state.removeProduct);
  const updateQty = useInvoiceStore((state) => state.updateQty);

  return (
    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">SKU</th>
            <th className="p-3 text-left">Product</th>
            <th className="p-3 text-center">Qty</th>
            <th className="p-3 text-right">Price</th>
            <th className="p-3 text-center">GST %</th>
            <th className="p-3 text-right">GST Amount</th>
            <th className="p-3 text-right">Total</th>
            <th className="p-3 text-center">Action</th>
          </tr>
        </thead>

        <tbody>
          {items.length === 0 ? (
            <tr>
              <td
                colSpan={8}
                className="py-10 text-center text-gray-500"
              >
                No products added
              </td>
            </tr>
          ) : (
            items.map((item) => {
              const calc = calculateItemTotal(
                item.price,
                item.qty,
                item.gst
              );

              return (
                <tr
                  key={item.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-3 font-medium">
                    {item.sku}
                  </td>

                  <td className="p-3">
                    {item.name}
                  </td>

                  <td className="p-3">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        onClick={() =>
                          updateQty(item.id, item.qty - 1)
                        }
                        className="h-8 w-8 rounded border hover:bg-gray-100"
                      >
                        −
                      </button>

                      <input
                        value={item.qty}
                        readOnly
                        className="w-12 rounded border text-center"
                      />

                      <button
                        onClick={() =>
                          updateQty(item.id, item.qty + 1)
                        }
                        className="h-8 w-8 rounded border hover:bg-gray-100"
                      >
                        +
                      </button>
                    </div>
                  </td>

                  <td className="p-3 text-right">
                    ₹{Number(item.price).toLocaleString()}
                  </td>

                  <td className="p-3 text-center">
                    {item.gst}%
                  </td>

                  <td className="p-3 text-right">
                    ₹{calc.gstAmount.toFixed(2)}
                  </td>

                  <td className="p-3 text-right font-semibold">
                    ₹{calc.total.toFixed(2)}
                  </td>

                  <td className="p-3 text-center">
                    <button
                      onClick={() => removeProduct(item.id)}
                      className="rounded p-2 hover:bg-red-100"
                    >
                      <Trash2
                        size={18}
                        className="text-red-500"
                      />
                    </button>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}