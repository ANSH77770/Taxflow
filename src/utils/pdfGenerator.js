import jsPDF from "jspdf";

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

  const company = {
    name: "TaxFlow Technologies Pvt Ltd",
    owner: "Ansh Pruthi",
    gstin: "07ABCDE1234F1Z5",
    address: "Netaji Subhash Place, New Delhi",
    phone: "+91 9876543210",
    email: "support@taxflow.in",
    bankName: "HDFC Bank",
    accountNumber: "12345678901234",
    ifsc: "HDFC0000123",
    upi: "taxflow@hdfcbank",
  };

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