import { create } from "zustand";

export const useInvoiceStore = create((set) => ({
  customer: "",

  items: [],

  shipping: 0,

  roundOff: 0,

  notes: "",

  setCustomer: (customer) =>
    set({ customer }),

  setShipping: (shipping) =>
    set({
      shipping: Number(shipping) || 0,
    }),

  setRoundOff: (roundOff) =>
    set({
      roundOff: Number(roundOff) || 0,
    }),

  setNotes: (notes) =>
    set({ notes }),

  addProduct: (product) =>
    set((state) => {

      const existing = state.items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        return {
          items: state.items.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  qty: item.qty + 1,
                }
              : item
          ),
        };
      }

      return {
        items: [
          ...state.items,
          {
            ...product,
            qty: 1,
          },
        ],
      };
    }),

  updateQty: (id, qty) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: Math.max(
                1,
                Number(qty) || 1
              ),
            }
          : item
      ),
    })),

  updateDiscount: (id, discount) =>
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              discount:
                Number(discount) || 0,
            }
          : item
      ),
    })),

  removeProduct: (id) =>
    set((state) => ({
      items: state.items.filter(
        (item) => item.id !== id
      ),
    })),

  clearInvoice: () =>
    set({
      customer: "",
      items: [],
      shipping: 0,
      roundOff: 0,
      notes: "",
    }),
}));