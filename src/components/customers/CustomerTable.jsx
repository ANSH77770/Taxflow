import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { Trash2 } from "lucide-react";

import { useCustomerStore } from "../../store/useCustomerStore";

export default function CustomerTable({ search }) {
  const customers = useCustomerStore((state) => state.customers);

  const deleteCustomer = useCustomerStore(
    (state) => state.deleteCustomer
  );

  const filteredCustomers = customers.filter((customer) =>
    customer.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>GSTIN</TableHead>
          <TableHead>Phone</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {filteredCustomers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.gstin}</TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>{customer.email}</TableCell>

            <TableCell>
              <button
                onClick={() => deleteCustomer(customer.id)}
              >
                <Trash2
                  size={18}
                  className="text-red-500 hover:text-red-700"
                />
              </button>
            </TableCell>
          </TableRow>
        ))}

        {filteredCustomers.length === 0 && (
          <TableRow>
            <TableCell colSpan={5} className="text-center py-8">
              No customers found.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}