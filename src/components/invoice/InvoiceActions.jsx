import { Button } from "@/components/ui/button";
import { useInvoiceStore } from "../../store/useInvoiceStore";
import { useInvoiceHistoryStore } from "../../store/useInvoiceHistoryStore";
import { useCustomerStore } from "../../store/useCustomerStore";
import { calculateInvoice } from "../../utils/invoiceCalculations";

export default function InvoiceActions() {
  const items = useInvoiceStore((state) => state.items);
  const customerId = useInvoiceStore((state) => state.customer);

  const customers = useCustomerStore((state) => state.customers);

  const saveInvoice = useInvoiceHistoryStore(
    (state) => state.saveInvoice
  );

  function handleSaveDraft() {
    if (!customerId) {
      alert("Please select a customer.");
      return;
    }

    if (items.length === 0) {
      alert("Please add at least one product.");
      return;
    }

    const customer = customers.find(
      (c) => c.id === customerId
    );

    const totals = calculateInvoice(items);

    saveInvoice({
      customer: customer?.name || "Unknown Customer",
      customerId,
      date: new Date().toLocaleDateString("en-IN"),
      status: "Draft",
      total: totals.total,
      items,
    });

    alert("Invoice saved successfully!");
  }

  return (
    <div className="flex gap-4">
      <Button onClick={handleSaveDraft}>
        Save Draft
      </Button>

      <Button variant="secondary">
        Preview
      </Button>

      <Button>
        Generate PDF
      </Button>
    </div>
  );
}