import { useState } from "react";

import { Button } from "@/components/ui/button";

import CustomerTable from "../../components/customers/CustomerTable";
import CustomerStats from "../../components/customers/CustomerStats";
import SearchCustomer from "../../components/customers/SearchCustomer";

export default function Customers() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">
            Customers
          </h1>

          <p className="text-gray-500">
            Manage your business customers
          </p>
        </div>

        <Button>Add Customer</Button>
      </div>

      <CustomerStats />

      <SearchCustomer
        value={search}
        onChange={setSearch}
      />

      <CustomerTable search={search} />
    </div>
  );
}