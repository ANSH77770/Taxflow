import { Search, Plus } from "lucide-react";

export default function ProductToolbar({
  search,
  setSearch,
  onAddProduct,
}) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-white p-5 shadow md:flex-row md:items-center md:justify-between">

      <div className="relative w-full md:w-96">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full rounded-xl border py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

     <button
  onClick={onAddProduct}
  className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
>
  <Plus size={18} />
  Add Product
</button>

    </div>
  );
}