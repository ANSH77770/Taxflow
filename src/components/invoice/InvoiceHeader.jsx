export default function InvoiceHeader() {
  const invoiceNo = "INV-" + new Date().getFullYear() + "-0001";

  const today = new Date().toLocaleDateString("en-IN");

  return (
    <div className="flex justify-between items-center bg-white rounded-xl border p-6">

      <div>

        <h1 className="text-3xl font-bold">
          Create Invoice
        </h1>

        <p className="text-gray-500">
          Generate GST Invoice
        </p>

      </div>

      <div className="text-right">

        <h2 className="font-semibold">
          {invoiceNo}
        </h2>

        <p>{today}</p>

      </div>

    </div>
  );
}