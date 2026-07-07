import { heading, normal } from "./pdfStyles";

export function drawFooter(doc, company) {
  const pageHeight = doc.internal.pageSize.getHeight();

  const y = pageHeight - 45;

  doc.setDrawColor(210);
  doc.line(15, y, 195, y);

  heading(doc, "Bank Details", 15, y + 8);

  normal(doc, `Bank : ${company.bankName}`, 15, y + 16);

  normal(
    doc,
    `A/C No : ${company.accountNumber}`,
    15,
    y + 22
  );

  normal(
    doc,
    `IFSC : ${company.ifsc}`,
    15,
    y + 28
  );

  heading(doc, "UPI", 80, y + 8);

  normal(doc, company.upi, 80, y + 16);

  heading(doc, "Authorized Signatory", 145, y + 8);

  doc.line(145, y + 28, 192, y + 28);

  normal(doc, company.owner, 150, y + 35);
}