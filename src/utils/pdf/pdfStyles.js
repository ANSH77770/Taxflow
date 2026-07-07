export const COLORS = {
  primary: [37, 99, 235],
  dark: [31, 41, 55],
  light: [248, 250, 252],
  border: [220, 220, 220],
  success: [22, 163, 74],
};

export function title(doc, text, x, y) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.setTextColor(...COLORS.primary);
  doc.text(text, x, y);
}

export function heading(doc, text, x, y) {
  doc.setFont("helvetica", "bold");
  doc.setFontSize(13);
  doc.setTextColor(...COLORS.dark);
  doc.text(text, x, y);
}

export function normal(doc, text, x, y) {
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...COLORS.dark);
  doc.text(text, x, y);
}

export function money(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(value);
}