import { create } from "zustand";

export const useCompanyStore = create((set) => ({
  company: {
    name: "TaxFlow Technologies",
    gstin: "07AAACT1234A1Z5",
    phone: "+91 9876543210",
    email: "support@taxflow.com",
    address: "Connaught Place, New Delhi",
    bankName: "State Bank of India",
    accountNumber: "123456789012",
    ifsc: "SBIN0001234",
  },

  updateCompany: (data) =>
    set((state) => ({
      company: {
        ...state.company,
        ...data,
      },
    })),
}));