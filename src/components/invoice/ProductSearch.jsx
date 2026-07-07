import { Search } from "lucide-react";

export default function ProductSearch({
  value,
  onChange,
}) {
  return (
    <div className="relative">

      <Search
        size={18}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        placeholder="Search product by name, SKU or brand..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-xl border bg-white py-3 pl-10 pr-4 shadow-sm outline-none transition focus:border-blue-500"
      />

    </div>
  );
}
