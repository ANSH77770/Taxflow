import autoTable from "jspdf-autotable";
import { money } from "./pdfStyles";

export function drawTable(doc, items) {
  autoTable(doc, {
    startY: 130,

    theme: "grid",

    head: [[
      "SKU",
      "HSN",
      "Product",
      "Qty",
      "Unit",
      "Rate",
      "Disc %",
      "GST %",
      "Taxable",
      "GST Amt",
      "Total",
    ]],

    body: items.map((item) => {
      const subtotal = item.price * item.qty;

      const discount =
        subtotal * ((item.discount || 0) / 100);

      const taxable = subtotal - discount;

      const gstAmount =
        taxable * (item.gst / 100);

      const total =
        taxable + gstAmount;

      return [
        item.sku || "-",
        item.hsn || "-",
        item.name,
        item.qty,
        item.unit || "pcs",
        money(item.price),
        `${item.discount || 0}%`,
        `${item.gst}%`,
        money(taxable),
        money(gstAmount),
        money(total),
      ];
    }),

    styles: {
      fontSize: 8,
      cellPadding: 2.5,
      valign: "middle",
      lineColor: [220, 220, 220],
      lineWidth: 0.1,
    },

    headStyles: {
      fillColor: [37, 99, 235],
      textColor: [255, 255, 255],
      fontStyle: "bold",
      halign: "center",
    },

    bodyStyles: {
      textColor: [40, 40, 40],
    },

    alternateRowStyles: {
      fillColor: [248, 250, 252],
    },

    columnStyles: {
      0: { cellWidth: 16 },
      1: { cellWidth: 18 },
      2: { cellWidth: 42 },
      3: { halign: "center", cellWidth: 12 },
      4: { halign: "center", cellWidth: 14 },
      5: { halign: "right", cellWidth: 18 },
      6: { halign: "center", cellWidth: 14 },
      7: { halign: "center", cellWidth: 14 },
      8: { halign: "right", cellWidth: 22 },
      9: { halign: "right", cellWidth: 20 },
      10: { halign: "right", cellWidth: 22 },
    },
  });

  return doc.lastAutoTable.finalY;
}