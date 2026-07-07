import { money } from "./pdfStyles";

export function drawSummary(
  doc,
  totals,
  startY
) {
  const x = 120;

  const rows = [
    ["Subtotal", totals.subtotal],
    ["Discount", totals.discount],
    ["Taxable Value", totals.taxableValue],
    ["CGST", totals.cgst],
    ["SGST", totals.sgst],
    ["IGST", totals.igst],
  ];

  doc.setFillColor(245, 247, 250);
  doc.roundedRect(
    x,
    startY,
    75,
    65,
    2,
    2,
    "F"
  );

  doc.setFont("helvetica", "bold");
  doc.setFontSize(12);

  doc.text(
    "Invoice Summary",
    x + 5,
    startY + 8
  );

  let y = startY + 18;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  rows.forEach(([label, value]) => {
    doc.text(label, x + 5, y);

    doc.text(
      money(value),
      x + 70,
      y,
      {
        align: "right",
      }
    );

    y += 8;
  });

  doc.setDrawColor(180);

  doc.line(
    x + 5,
    y,
    x + 70,
    y
  );

  y += 10;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);

  doc.text(
    "Grand Total",
    x + 5,
    y
  );

  doc.text(
    money(totals.total),
    x + 70,
    y,
    {
      align: "right",
    }
  );

  return y;
}