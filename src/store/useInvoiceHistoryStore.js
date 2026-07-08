import { create } from "zustand";

export const useInvoiceHistoryStore = create((set, get) => ({

  invoices: [],

  saveInvoice: (invoice) =>
    set((state) => ({
      invoices: [
        {
          id: crypto.randomUUID(),
          ...invoice,
        },
        ...state.invoices,
      ],
    })),

  updateInvoice: (id, updatedInvoice) =>
    set((state) => ({
      invoices: state.invoices.map((invoice) =>
        invoice.id === id
          ? {
              ...invoice,
              ...updatedInvoice,
            }
          : invoice
      ),
    })),

  getInvoice: (id) =>
    get().invoices.find(
      (invoice) => invoice.id === id
    ),

  deleteInvoice: (id) =>
    set((state) => ({
      invoices: state.invoices.filter(
        (invoice) => invoice.id !== id
      ),
    })),

}));