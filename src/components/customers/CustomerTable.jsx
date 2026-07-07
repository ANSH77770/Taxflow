import {
  Table,
  TableHeader,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@/components/ui/table";

import { useCustomerStore } from "../../store/useCustomerStore";

export default function CustomerTable({ search }) {
  const customers = useCustomerStore((state) => state.customers);

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
        </TableRow>
      </TableHeader>

      <TableBody>
        {filteredCustomers.map((customer) => (
          <TableRow key={customer.id}>
            <TableCell>{customer.name}</TableCell>
            <TableCell>{customer.gstin}</TableCell>
            <TableCell>{customer.phone}</TableCell>
            <TableCell>{customer.email}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}