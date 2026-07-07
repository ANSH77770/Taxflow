import { Button } from "@/components/ui/button";
import { useInvoiceStore } from "../../store/useInvoiceStore";
import { useInvoiceHistoryStore } from "../../store/useInvoiceHistoryStore";
import { useCustomerStore } from "../../store/useCustomerStore";
import { calculateInvoice } from "../../utils/invoiceCalculations";

export default function InvoiceActions() {
  const {
    customer,
    items,
    shipping,
    roundOff,
    notes,
    clearInvoice,
  } = useInvoiceStore();

  const customers = useCustomerStore(
    (state) => state.customers
  );

  const saveInvoice = useInvoiceHistoryStore(
    (state) => state.saveInvoice
  );

  function handleSaveDraft() {
    if (!customer) {
      alert("Please select a customer.");
      return;
    }

    if (items.length === 0) {
      alert("Please add at least one product.");
      return;
    }

    const customerData = customers.find(
      (c) => c.id === customer
    );

    const totals = calculateInvoice(
      items,
      shipping,
      roundOff
    );

    saveInvoice({
      invoiceNo:
        "INV-" +
        Date.now().toString().slice(-6),

      customerId: customer,

      customer:
        customerData?.name ||
        "Unknown Customer",

      date: new Date().toLocaleDateString(
        "en-IN"
      ),

      status: "Draft",

      shipping,

      roundOff,

      notes,

      items,

      subtotal: totals.subtotal,

      discount: totals.discount,

      taxableValue:
        totals.taxableValue,

      gst: totals.gst,

      total: totals.total,
    });

    alert("Invoice saved successfully.");
  }

  function handleClear() {
    if (
      window.confirm(
        "Clear this invoice?"
      )
    ) {
      clearInvoice();
    }
  }

  return (
    <div className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">

      <Button
        className="w-full"
        onClick={handleSaveDraft}
      >
        Save Draft
      </Button>

      <Button
        variant="secondary"
        className="w-full"
      >
        Preview Invoice
      </Button>

      <Button className="w-full">
        Generate PDF
      </Button>

      <Button
        variant="destructive"
        className="w-full"
        onClick={handleClear}
      >
        Clear Invoice
      </Button>

    </div>
  );
}