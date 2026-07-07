import { useState } from "react";
import { useCompanyStore } from "../../store/useCompanyStore";

export default function CompanySettingsForm() {
  const company = useCompanyStore((state) => state.company);
  const updateCompany = useCompanyStore(
    (state) => state.updateCompany
  );

  const [form, setForm] = useState(company);

  function handleChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSave(e) {
    e.preventDefault();

    updateCompany(form);

    alert("Company profile updated successfully!");
  }

  return (
    <form
      onSubmit={handleSave}
      className="bg-white rounded-xl shadow-md p-8 space-y-8"
    >
      <div>
        <h2 className="text-3xl font-bold">
          Company Profile
        </h2>

        <p className="text-gray-500 mt-2">
          These details will automatically appear on
          invoices, PDF exports and future reports.
        </p>
      </div>

      {/* Company Information */}

      <div>

        <h3 className="font-semibold text-lg mb-4">
          Company Information
        </h3>

        <div className="grid grid-cols-2 gap-5">

          <Input
            label="Company Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="Owner Name"
            name="owner"
            value={form.owner}
            onChange={handleChange}
          />

          <Input
            label="GSTIN"
            name="gstin"
            value={form.gstin}
            onChange={handleChange}
          />

          <Input
            label="PAN"
            name="pan"
            value={form.pan}
            onChange={handleChange}
          />

          <Input
            label="Phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />

          <Input
            label="Email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Website"
            name="website"
            value={form.website}
            onChange={handleChange}
          />

          <Input
            label="Address"
            name="address"
            value={form.address}
            onChange={handleChange}
          />

        </div>

      </div>

      {/* Banking Details */}

      <div>

        <h3 className="font-semibold text-lg mb-4">
          Banking Details
        </h3>

        <div className="grid grid-cols-2 gap-5">

          <Input
            label="Bank Name"
            name="bankName"
            value={form.bankName}
            onChange={handleChange}
          />

          <Input
            label="Account Number"
            name="accountNumber"
            value={form.accountNumber}
            onChange={handleChange}
          />

          <Input
            label="IFSC Code"
            name="ifsc"
            value={form.ifsc}
            onChange={handleChange}
          />

          <Input
            label="UPI ID"
            name="upi"
            value={form.upi}
            onChange={handleChange}
          />

        </div>

      </div>

      <div className="flex justify-end">

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition"
        >
          Save Company Profile
        </button>

      </div>

    </form>
  );
}

function Input({
  label,
  name,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">

      <label className="font-medium">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

    </div>
  );
}