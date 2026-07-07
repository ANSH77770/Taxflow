import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import { useInvoiceStore } from "../../store/useInvoiceStore";
import { useInvoiceHistoryStore } from "../../store/useInvoiceHistoryStore";
import { useCustomerStore } from "../../store/useCustomerStore";

import { calculateInvoice } from "../../utils/invoiceCalculations";
import { generateInvoicePDF } from "../../utils/pdfGenerator";

export default function InvoiceActions() {
  const navigate = useNavigate();

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

  const customerData = customers.find(
    (c) => c.id === customer
  );

  const totals = calculateInvoice(
    items,
    shipping,
    roundOff
  );

  function validateInvoice() {
    if (!customer) {
      alert("Please select a customer.");
      return false;
    }

    if (items.length === 0) {
      alert("Please add at least one product.");
      return false;
    }

    return true;
  }

  function handleSaveDraft() {
    if (!validateInvoice()) return;

    saveInvoice({
      invoiceNo: "INV-" + Date.now().toString().slice(-6),
      customerId: customer,
      customer: customerData?.name || "Unknown Customer",
      date: new Date().toLocaleDateString("en-IN"),
      status: "Draft",
      shipping,
      roundOff,
      notes,
      items,
      subtotal: totals.subtotal,
      discount: totals.discount,
      taxableValue: totals.taxableValue,
      gst: totals.gst,
      total: totals.total,
    });

    alert("Invoice saved successfully.");
  }

  function handlePreview() {
    if (!validateInvoice()) return;
    navigate("/invoice-preview");
  }

 function handlePDF() {
  console.log("Generate PDF clicked");

  if (!validateInvoice()) return;

  console.log("Validation passed");

  generateInvoicePDF(
    customerData,
    items,
    totals
  );
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
        onClick={handlePreview}
      >
        Preview Invoice
      </Button>

      <Button
        className="w-full"
        onClick={handlePDF}
      >
        Generate PDF
      </Button>

      <Button
        variant="destructive"
        className="w-full"
        onClick={clearInvoice}
      >
        Clear Invoice
      </Button>

    </div>
  );
}