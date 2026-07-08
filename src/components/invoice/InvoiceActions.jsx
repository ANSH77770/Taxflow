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
    editingInvoiceId,
    clearEditingInvoice,
  } = useInvoiceStore();

  const customers = useCustomerStore(
    (state) => state.customers
  );

  const {
    saveInvoice,
    updateInvoice,
  } = useInvoiceHistoryStore();

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

  function getInvoiceData(status) {
    return {
      invoiceNo:
        "INV-" + Date.now().toString().slice(-6),

      customerId: customer,

      customer:
        customerData?.name ||
        "Unknown Customer",

      date: new Date().toLocaleDateString(
        "en-IN"
      ),

      status,

      shipping,

      roundOff,

      notes,

      items,

      subtotal: totals.subtotal,

      discount: totals.discount,

      taxableValue: totals.taxableValue,

      gst: totals.gst,

      total: totals.total,
    };
  }

  function handleSaveDraft() {
    if (!validateInvoice()) return;

    const invoice =
      getInvoiceData("Draft");

    if (editingInvoiceId) {
      updateInvoice(
        editingInvoiceId,
        invoice
      );

      alert("Invoice updated.");
    } else {
      saveInvoice(invoice);

      alert("Invoice saved.");
    }

    clearEditingInvoice();
  }

  function handlePreview() {
    if (!validateInvoice()) return;

    navigate("/invoice-preview");
  }

  function handlePDF() {
    if (!validateInvoice()) return;

    const invoice =
      getInvoiceData("Generated");

    if (editingInvoiceId) {
      updateInvoice(
        editingInvoiceId,
        invoice
      );
    } else {
      saveInvoice(invoice);
    }

    generateInvoicePDF(
      customerData,
      items,
      totals
    );

    clearEditingInvoice();
  }

  return (
    <div className="space-y-4 rounded-xl border bg-white p-6 shadow-sm">

      <Button
        className="w-full"
        onClick={handleSaveDraft}
      >
        {editingInvoiceId
          ? "Update Draft"
          : "Save Draft"}
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
        {editingInvoiceId
          ? "Update & Generate PDF"
          : "Generate PDF"}
      </Button>

      <Button
        variant="destructive"
        className="w-full"
        onClick={() => {
          clearInvoice();
          clearEditingInvoice();
        }}
      >
        Clear Invoice
      </Button>

    </div>
  );
}