import { useState } from "react";

import InvoiceHeader from "../../components/invoice/InvoiceHeader";
import CompanyProfile from "../../components/invoice/CompanyProfile";
import InvoiceDetails from "../../components/invoice/InvoiceDetails";

import CustomerSelector from "../../components/invoice/CustomerSelector";
import InvoiceCustomerCard from "../../components/invoice/InvoiceCustomerCard";

import ProductSelector from "../../components/invoice/ProductSelector";
import InvoiceTable from "../../components/invoice/InvoiceTable";

import InvoiceSummary from "../../components/invoice/InvoiceSummary";
import InvoiceActions from "../../components/invoice/InvoiceActions";

import InvoiceHistory from "../../components/invoice/InvoiceHistory";

export default function Invoices() {
  const [customer, setCustomer] =
    useState("");

  return (
    <div className="space-y-8">

      <InvoiceHeader />

      <div className="grid gap-6 lg:grid-cols-2">

        <CompanyProfile />

        <InvoiceDetails />

      </div>

      <CustomerSelector
        value={customer}
        onChange={setCustomer}
      />

      <InvoiceCustomerCard
        customerId={customer}
      />

      <ProductSelector />

      <InvoiceTable />

      <div className="grid gap-6 lg:grid-cols-2">

        <InvoiceSummary />

        <InvoiceActions />

      </div>

      <InvoiceHistory />

    </div>
  );
}