import {
  heading,
  normal,
} from "./pdfStyles";

export function drawHeader(
  doc,
  company,
  customer,
  invoiceNo
) {
  doc.setFillColor(37, 99, 235);

  doc.rect(
    0,
    0,
    210,
    32,
    "F"
  );

  doc.setTextColor(255);

  doc.setFont(
    "helvetica",
    "bold"
  );

  doc.setFontSize(22);

  doc.text(
    "TAXFLOW",
    15,
    18
  );

  doc.setFontSize(11);

  doc.text(
    "GST TAX INVOICE",
    15,
    27
  );

  doc.setTextColor(0);

  heading(
    doc,
    "Company Details",
    15,
    45
  );

  normal(
    doc,
    company.name,
    15,
    53
  );

  normal(
    doc,
    company.address,
    15,
    60
  );

  normal(
    doc,
    company.phone,
    15,
    67
  );

  normal(
    doc,
    company.email,
    15,
    74
  );

  normal(
    doc,
    "GSTIN : " +
      company.gstin,
    15,
    81
  );

  heading(
    doc,
    "Bill To",
    120,
    45
  );

  normal(
    doc,
    customer?.name ??
      "",
    120,
    53
  );

  normal(
    doc,
    customer?.phone ??
      "",
    120,
    60
  );

  normal(
    doc,
    customer?.email ??
      "",
    120,
    67
  );

  normal(
    doc,
    customer?.gstin ??
      "",
    120,
    74
  );

  heading(
    doc,
    "Invoice No",
    120,
    88
  );

  normal(
    doc,
    invoiceNo,
    120,
    95
  );

  heading(
    doc,
    "Invoice Date",
    120,
    107
  );

  normal(
    doc,
    new Date().toLocaleDateString(
      "en-IN"
    ),
    120,
    114
  );

  doc.setDrawColor(200);

  doc.line(
    15,
    122,
    195,
    122
  );
}