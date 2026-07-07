import { create } from "zustand";

export const useCustomerStore = create((set) => ({
  customers: [
    {
      id: 1,
      name: "ABC Traders",
      gst: "07ABCDE1234F1Z5",
      phone: "9876543210",
      email: "abc@gmail.com",
    },
    {
      id: 2,
      name: "XYZ Pvt Ltd",
      gst: "29ABCDE6789K1Z2",
      phone: "9988776655",
      email: "xyz@gmail.com",
    },
  ],

  addCustomer: (customer) =>
    set((state) => ({
      customers: [...state.customers, customer],
    })),
}));