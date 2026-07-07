import { create } from "zustand";

export const useInvoiceHistoryStore = create((set) => ({
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

  deleteInvoice: (id) =>
    set((state) => ({
      invoices: state.invoices.filter(
        (invoice) => invoice.id !== id
      ),
    })),
}));