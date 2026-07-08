import { Search } from "lucide-react";

export default function InvoiceToolbar({
  search,
  setSearch,
}) {
  return (
    <div className="mb-8 flex flex-col gap-4 rounded-2xl bg-white p-5 shadow md:flex-row md:items-center md:justify-between">

      <div className="relative w-full md:w-96">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search invoice..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl border py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      <div className="text-sm text-gray-500">
        Search by Customer, Status or Date
      </div>

    </div>
  );
}