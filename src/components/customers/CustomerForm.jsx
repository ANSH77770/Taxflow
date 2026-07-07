import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CustomerForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: "",
    gstin: "",
    phone: "",
    email: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(form);

    setForm({
      name: "",
      gstin: "",
      phone: "",
      email: "",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        placeholder="Customer Name"
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <Input
        placeholder="GSTIN"
        name="gstin"
        value={form.gstin}
        onChange={handleChange}
      />

      <Input
        placeholder="Phone"
        name="phone"
        value={form.phone}
        onChange={handleChange}
      />

      <Input
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <Button type="submit" className="w-full">
        Save Customer
      </Button>
    </form>
  );
}