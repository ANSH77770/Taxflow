import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useCompanyStore } from "../../store/useCompanyStore";

export default function CompanySettingsForm() {
  const company = useCompanyStore((state) => state.company);
  const updateCompany = useCompanyStore(
    (state) => state.updateCompany
  );

  const [form, setForm] = useState(company);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateCompany(form);
    alert("Company details updated successfully.");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl border bg-white p-6 shadow-sm"
    >
      <h2 className="text-2xl font-bold">
        Company Settings
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <input
          name="name"
          placeholder="Company Name"
          value={form.name}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="gstin"
          placeholder="GSTIN"
          value={form.gstin}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="bankName"
          placeholder="Bank Name"
          value={form.bankName}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="accountNumber"
          placeholder="Account Number"
          value={form.accountNumber}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <input
          name="ifsc"
          placeholder="IFSC"
          value={form.ifsc}
          onChange={handleChange}
          className="border rounded-lg p-3"
        />

        <textarea
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="border rounded-lg p-3 md:col-span-2"
          rows={3}
        />

      </div>

      <Button type="submit">
        Save Company Details
      </Button>
    </form>
  );
}