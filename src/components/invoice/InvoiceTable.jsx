import { Trash2 } from "lucide-react";

import { useInvoiceStore } from "../../store/useInvoiceStore";

import { calculateItemTotal } from "../../utils/invoiceCalculations";

export default function InvoiceTable() {

  const items = useInvoiceStore(
    (state) => state.items
  );

  const removeProduct = useInvoiceStore(
    (state) => state.removeProduct
  );

  const updateQty = useInvoiceStore(
    (state) => state.updateQty
  );

  const updateDiscount = useInvoiceStore(
    (state) => state.updateDiscount
  );

  return (

    <div className="overflow-x-auto rounded-xl border bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-3">SKU</th>

            <th>HSN</th>

            <th>Product</th>

            <th>Qty</th>

            <th>Unit</th>

            <th>Price</th>

            <th>Disc%</th>

            <th>GST%</th>

            <th>Taxable</th>

            <th>GST Amt</th>

            <th>Total</th>

            <th></th>

          </tr>

        </thead>

        <tbody>

          {items.length === 0 ? (

            <tr>

              <td
                colSpan={12}
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
                item.gst,
                item.discount
              );

              return (

                <tr
                  key={item.id}
                  className="border-t"
                >

                  <td className="p-3">
                    {item.sku}
                  </td>

                  <td>
                    {item.hsn}
                  </td>

                  <td>
                    {item.name}
                  </td>

                  <td>

                    <div className="flex items-center justify-center gap-2">

                      <button
                        className="rounded border px-2"
                        onClick={() =>
                          updateQty(
                            item.id,
                            item.qty - 1
                          )
                        }
                      >

                        -

                      </button>

                      <span>
                        {item.qty}
                      </span>

                      <button
                        className="rounded border px-2"
                        onClick={() =>
                          updateQty(
                            item.id,
                            item.qty + 1
                          )
                        }
                      >

                        +

                      </button>

                    </div>

                  </td>

                  <td>
                    {item.unit}
                  </td>

                  <td>
                    ₹{item.price}
                  </td>

                  <td>

                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={item.discount}
                      onChange={(e) =>
                        updateDiscount(
                          item.id,
                          e.target.value
                        )
                      }
                      className="w-16 rounded border p-1 text-center"
                    />

                  </td>

                  <td>

                    {item.gst}%

                  </td>

                  <td>

                    ₹{calc.taxableValue.toFixed(2)}

                  </td>

                  <td>

                    ₹{calc.gstAmount.toFixed(2)}

                  </td>

                  <td className="font-semibold">

                    ₹{calc.total.toFixed(2)}

                  </td>

                  <td>

                    <button
                      onClick={() =>
                        removeProduct(item.id)
                      }
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