import { create } from "zustand";

export const useCompanyStore = create((set) => ({
  company: {
    name: "TaxFlow Technologies Pvt Ltd",
    owner: "Ansh Pruthi",
    gstin: "07ABCDE1234F1Z5",
    pan: "ABCDE1234F",
    address: "Netaji Subhash Place, New Delhi",
    phone: "+91 9876543210",
    email: "support@taxflow.in",
    website: "www.taxflow.in",

    bankName: "HDFC Bank",
    accountNumber: "12345678901234",
    ifsc: "HDFC0000123",
    upi: "taxflow@hdfcbank",
  },

  updateCompany: (data) =>
    set((state) => ({
      company: {
        ...state.company,
        ...data,
      },
    })),
}));