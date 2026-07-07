export function calculateItemTotal(
  price,
  qty,
  gst,
  discount = 0
) {
  const quantity = Number(qty) || 1;
  const unitPrice = Number(price) || 0;
  const gstRate = Number(gst) || 0;
  const discountRate =
    Number(discount) || 0;

  const subtotal =
    unitPrice * quantity;

  const discountAmount =
    subtotal * discountRate / 100;

  const taxableValue =
    subtotal - discountAmount;

  const gstAmount =
    taxableValue * gstRate / 100;

  return {
    subtotal,
    discountAmount,
    taxableValue,
    gstAmount,
    total:
      taxableValue + gstAmount,
  };
}

export function calculateInvoice(
  items,
  shipping = 0,
  roundOff = 0,
  placeOfSupply = "Delhi",
  companyState = "Delhi"
) {
  let subtotal = 0;

  let discount = 0;

  let taxableValue = 0;

  let cgst = 0;

  let sgst = 0;

  let igst = 0;

  items.forEach((item) => {
    const calc =
      calculateItemTotal(
        item.price,
        item.qty,
        item.gst,
        item.discount
      );

    subtotal += calc.subtotal;

    discount +=
      calc.discountAmount;

    taxableValue +=
      calc.taxableValue;

    if (
      placeOfSupply === companyState
    ) {
      cgst +=
        calc.gstAmount / 2;

      sgst +=
        calc.gstAmount / 2;
    } else {
      igst +=
        calc.gstAmount;
    }
  });

  const gst =
    cgst + sgst + igst;

  const total =
    taxableValue +
    gst +
    Number(shipping) +
    Number(roundOff);

  return {
    subtotal,
    discount,
    taxableValue,
    cgst,
    sgst,
    igst,
    gst,
    shipping,
    roundOff,
    total,
  };
}