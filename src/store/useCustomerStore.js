import { create } from "zustand";

export const useCustomerStore = create((set) => ({
customers: [
  {
    id: crypto.randomUUID(),
    name: "ABC Traders",
    gstin: "07ABCDE1234F1Z5",
    phone: "9876543210",
    email: "abc@gmail.com",
    address: "Connaught Place, New Delhi",
  },
  {
    id: crypto.randomUUID(),
    name: "XYZ Pvt Ltd",
    gstin: "29ABCDE5678A1Z9",
    phone: "9988776655",
    email: "xyz@gmail.com",
    address: "MG Road, Bengaluru",
  },
  {
    id: crypto.randomUUID(),
    name: "Reliance Retail Ltd",
    gstin: "27AABCR1718E1ZV",
    phone: "9820012345",
    email: "support@relianceretail.com",
    address: "Navi Mumbai, Maharashtra",
  },
  {
    id: crypto.randomUUID(),
    name: "Tata Consultancy Services",
    gstin: "27AAACT1234F1Z5",
    phone: "9811122233",
    email: "contact@tcs.com",
    address: "BKC, Mumbai",
  },
  {
    id: crypto.randomUUID(),
    name: "Infosys Limited",
    gstin: "29AAACI9876B1ZK",
    phone: "9845012345",
    email: "support@infosys.com",
    address: "Electronic City, Bengaluru",
  },
  {
    id: crypto.randomUUID(),
    name: "Wipro Technologies",
    gstin: "29AAACW7654M1ZT",
    phone: "9886655443",
    email: "sales@wipro.com",
    address: "Sarjapur Road, Bengaluru",
  },
  {
    id: crypto.randomUUID(),
    name: "HCL Technologies",
    gstin: "09AAACH4321P1ZX",
    phone: "9873001122",
    email: "contact@hcl.com",
    address: "Noida, Uttar Pradesh",
  },
  {
    id: crypto.randomUUID(),
    name: "Mahindra Logistics",
    gstin: "27AACCM1111D1ZR",
    phone: "9898989898",
    email: "logistics@mahindra.com",
    address: "Pune, Maharashtra",
  },
  {
    id: crypto.randomUUID(),
    name: "Flipkart Internet Pvt Ltd",
    gstin: "29AACCF1234A1Z8",
    phone: "8067891234",
    email: "seller@flipkart.com",
    address: "Whitefield, Bengaluru",
  },
  {
    id: crypto.randomUUID(),
    name: "Amazon Seller Services",
    gstin: "29AABCA9876H1ZP",
    phone: "8045678912",
    email: "business@amazon.in",
    address: "Bengaluru, Karnataka",
  },
  {
    id: crypto.randomUUID(),
    name: "Adani Enterprises",
    gstin: "24AACCA5678L1ZX",
    phone: "9890001111",
    email: "info@adani.com",
    address: "Ahmedabad, Gujarat",
  },
  {
    id: crypto.randomUUID(),
    name: "Larsen & Toubro",
    gstin: "27AAACL1234G1ZX",
    phone: "9819000000",
    email: "projects@larsentoubro.com",
    address: "Powai, Mumbai",
  },
  {
    id: crypto.randomUUID(),
    name: "TechNova Solutions",
    gstin: "07AAACT9876X1ZM",
    phone: "9876501234",
    email: "hello@technova.in",
    address: "Sector 62, Noida",
  },
  {
    id: crypto.randomUUID(),
    name: "GreenLeaf Organics",
    gstin: "24AACCG8765P1ZY",
    phone: "9825123456",
    email: "sales@greenleaf.in",
    address: "Surat, Gujarat",
  },
  {
    id: crypto.randomUUID(),
    name: "BlueSky Electronics",
    gstin: "29AACCB5432L1ZT",
    phone: "9900123456",
    email: "info@blueskyelectronics.in",
    address: "Indiranagar, Bengaluru",
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