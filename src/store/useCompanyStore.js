import { create } from "zustand";

export const useCompanyStore = create(() => ({
  company: {
    name: "TaxFlow Technologies Pvt Ltd",

    owner: "Ansh Pruthi",

    gstin: "07ABCDE1234F1Z5",

    pan: "ABCDE1234F",

    phone: "+91 9876543210",

    email: "support@taxflow.in",

    website: "www.taxflow.in",

    address:
      "402, Cyber Hub, Netaji Subhash Place, New Delhi - 110034",

    bankName: "HDFC Bank",

    accountNumber: "12345678901234",

    ifsc: "HDFC0000123",

    branch: "Pitampura",

    upi: "taxflow@hdfcbank",
  },
}));