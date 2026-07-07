import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CustomerForm from "./CustomerForm";
import { useCustomerStore } from "../../store/useCustomerStore";

export default function AddCustomerDialog({ open, setOpen }) {
  const addCustomer = useCustomerStore((state) => state.addCustomer);

  function handleSave(customer) {
    addCustomer(customer);
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Customer</DialogTitle>
        </DialogHeader>

        <CustomerForm onSubmit={handleSave} />
      </DialogContent>
    </Dialog>
  );
}