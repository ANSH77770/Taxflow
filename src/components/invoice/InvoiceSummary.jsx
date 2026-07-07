import { useInvoiceStore } from "../../store/useInvoiceStore";
import { calculateInvoice } from "../../utils/invoiceCalculations";

export default function InvoiceSummary() {
  const items = useInvoiceStore((state) => state.items);
  const shipping = useInvoiceStore((state) => state.shipping);
  const roundOff = useInvoiceStore((state) => state.roundOff);

  const totals = calculateInvoice(
    items,
    shipping,
    roundOff
  );

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="mb-5 text-xl font-bold">
        GST Summary
      </h2>

      <div className="space-y-3">

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>₹{totals.subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Discount</span>
          <span>- ₹{totals.discount.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Taxable Value</span>
          <span>₹{totals.taxableValue.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>CGST</span>
          <span>₹{totals.cgst.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>SGST</span>
          <span>₹{totals.sgst.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>IGST</span>
          <span>₹{totals.igst.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Shipping</span>
          <span>₹{totals.shipping.toFixed(2)}</span>
        </div>

        <div className="flex justify-between">
          <span>Round Off</span>
          <span>₹{totals.roundOff.toFixed(2)}</span>
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