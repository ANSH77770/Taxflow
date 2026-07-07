import { create } from "zustand";

export const useCustomerStore = create((set) => ({
  customers: [
    {
      id: crypto.randomUUID(),
      name: "ABC Traders",
      gstin: "07ABCDE1234F1Z5",
      phone: "9876543210",
      email: "abc@gmail.com",
    },
    {
      id: crypto.randomUUID(),
      name: "XYZ Pvt Ltd",
      gstin: "29ABCDE5678A1Z9",
      phone: "9988776655",
      email: "xyz@gmail.com",
    },
  ],

  addCustomer: (customer) =>
    set((state) => ({
      customers: [
        ...state.customers,
        {
          id: crypto.randomUUID(),
          ...customer,
        },
      ],
    })),

  deleteCustomer: (id) =>
    set((state) => ({
      customers: state.customers.filter((c) => c.id !== id),
    })),
}));