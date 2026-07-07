import { useState } from "react";

export default function InvoiceDetails() {
  const today = new Date().toISOString().split("T")[0];

  const [invoiceNumber] = useState(
    `INV-${new Date().getFullYear()}-${String(
      Math.floor(Math.random() * 100000)
    ).padStart(5, "0")}`
  );

  const [invoiceDate, setInvoiceDate] = useState(today);
  const [dueDate, setDueDate] = useState(today);
  const [placeOfSupply, setPlaceOfSupply] = useState("Delhi");
  const [paymentStatus, setPaymentStatus] = useState("Pending");
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  return (
    <div className="rounded-xl border bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-bold mb-6">
        Invoice Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div>
          <label className="text-sm text-gray-500">
            Invoice Number
          </label>

          <input
            className="w-full mt-2 border rounded-lg p-3 bg-gray-100"
            readOnly
            value={invoiceNumber}
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Invoice Date
          </label>

          <input
            type="date"
            className="w-full mt-2 border rounded-lg p-3"
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Due Date
          </label>

          <input
            type="date"
            className="w-full mt-2 border rounded-lg p-3"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Place of Supply
          </label>

          <select
            className="w-full mt-2 border rounded-lg p-3"
            value={placeOfSupply}
            onChange={(e) => setPlaceOfSupply(e.target.value)}
          >
            <option>Delhi</option>
            <option>Haryana</option>
            <option>Punjab</option>
            <option>Uttar Pradesh</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Payment Status
          </label>

          <select
            className="w-full mt-2 border rounded-lg p-3"
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <option>Pending</option>
            <option>Paid</option>
            <option>Partially Paid</option>
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-500">
            Payment Method
          </label>

          <select
            className="w-full mt-2 border rounded-lg p-3"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option>Cash</option>
            <option>UPI</option>
            <option>Bank Transfer</option>
            <option>Credit Card</option>
            <option>Cheque</option>
          </select>
        </div>

      </div>
    </div>
  );
}