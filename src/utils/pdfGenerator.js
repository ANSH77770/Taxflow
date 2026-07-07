import jsPDF from "jspdf";

import { useCompanyStore } from "../store/useCompanyStore";

import { drawHeader } from "./pdf/pdfHeader";
import { drawTable } from "./pdf/pdfTable";
import { drawSummary } from "./pdf/pdfSummary";
import { drawFooter } from "./pdf/pdfFooter";

export function generateInvoicePDF(
  customer,
  items,
  totals
) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  // Get company details from Zustand store
  const company = useCompanyStore.getState().company;

  const invoiceNo =
    "INV-" + Date.now().toString().slice(-6);

  drawHeader(
    doc,
    company,
    customer,
    invoiceNo
  );

  const tableEndY = drawTable(
    doc,
    items
  );

  drawSummary(
    doc,
    totals,
    tableEndY + 10
  );

  drawFooter(
    doc,
    company
  );

  doc.save(`TaxFlow-${invoiceNo}.pdf`);
}