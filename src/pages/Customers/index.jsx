import { useState } from "react";

import { Button } from "@/components/ui/button";

import CustomerTable from "../../components/customers/CustomerTable";
import CustomerStats from "../../components/customers/CustomerStats";
import SearchCustomer from "../../components/customers/SearchCustomer";
import AddCustomerDialog from "../../components/customers/AddCustomerDialog";

export default function Customers() {
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-8">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="text-4xl font-bold">
            Customers
          </h1>

          <p className="text-gray-500">
            Manage your customers
          </p>

        </div>

        <Button onClick={() => setOpen(true)}>
          Add Customer
        </Button>

      </div>

      <CustomerStats />

      <SearchCustomer
        value={search}
        onChange={setSearch}
      />

      <CustomerTable search={search} />

      <AddCustomerDialog
        open={open}
        setOpen={setOpen}
      />

    </div>
  );
}