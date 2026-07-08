import { useState } from "react";

import { useInvoiceHistoryStore } from "../../store/useInvoiceHistoryStore";
import { useInvoiceStore } from "../../store/useInvoiceStore";

import InvoiceStats from "./InvoiceStats";
import InvoiceToolbar from "./InvoiceToolbar";
import InvoiceHistoryTable from "./InvoiceHistoryTable";
import DeleteInvoiceDialog from "./DeleteInvoiceDialog";
import InvoiceViewModal from "./InvoiceViewModal";

export default function InvoiceHistory() {

  const invoices = useInvoiceHistoryStore(
    (state) => state.invoices
  );

  const deleteInvoice = useInvoiceHistoryStore(
    (state) => state.deleteInvoice
  );

  const loadInvoice = useInvoiceStore(
    (state) => state.loadInvoice
  );

  const [search, setSearch] = useState("");

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [viewOpen, setViewOpen] =
    useState(false);

  const [selectedInvoice, setSelectedInvoice] =
    useState(null);

  const filteredInvoices = invoices.filter((invoice) => {

    const query = search.toLowerCase();

    return (
      invoice.customer
        .toLowerCase()
        .includes(query) ||
      invoice.status
        .toLowerCase()
        .includes(query) ||
      invoice.date
        .toLowerCase()
        .includes(query)
    );

  });

  function handleView(invoice) {
    setSelectedInvoice(invoice);
    setViewOpen(true);
  }

  function handleEdit(invoice) {

    loadInvoice(invoice);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  }

  function handleDownload(invoice) {
    console.log("Download", invoice);

    // Connect PDF here later
  }

  function handleDelete(invoice) {
    setSelectedInvoice(invoice);
    setDeleteOpen(true);
  }

  function confirmDelete() {

    if (!selectedInvoice) return;

    deleteInvoice(selectedInvoice.id);

    setDeleteOpen(false);

    setSelectedInvoice(null);

  }

  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold">
          Invoice History
        </h2>

        <p className="mt-2 text-gray-500">
          View and manage all generated invoices.
        </p>

      </div>

      <InvoiceStats />

      <InvoiceToolbar
        search={search}
        setSearch={setSearch}
      />

      <InvoiceHistoryTable
        invoices={filteredInvoices}
        onView={handleView}
        onEdit={handleEdit}
        onDownload={handleDownload}
        onDelete={handleDelete}
      />

      <InvoiceViewModal
        open={viewOpen}
        invoice={selectedInvoice}
        onClose={() => {
          setViewOpen(false);
          setSelectedInvoice(null);
        }}
      />

      <DeleteInvoiceDialog
        open={deleteOpen}
        invoice={selectedInvoice}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedInvoice(null);
        }}
        onConfirm={confirmDelete}
      />

    </div>
  );
}