import { useInvoiceStore } from "../../store/useInvoiceStore";
import { calculateInvoice } from "../../utils/invoiceCalculations";

export default function InvoiceSummary() {
  const items = useInvoiceStore((state) => state.items);

  // Later this will come from InvoiceDetails
  const placeOfSupply = "Delhi";

  const totals = calculateInvoice(items, placeOfSupply);

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">

      <h2 className="text-xl font-bold mb-5">
        GST Summary
      </h2>

      <div className="space-y-3">

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

        <hr />

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