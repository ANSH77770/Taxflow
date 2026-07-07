export default function SearchCustomer({
  value,
  onChange,
}) {
  return (
    <input
      type="text"
      placeholder="Search customer..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-xl border p-3"
    />
  );
}