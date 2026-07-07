import { Package, Plus } from "lucide-react";

export default function ProductCard({
  product,
  onAdd,
}) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm hover:shadow-md transition">

      <div className="flex items-start justify-between">

        <div>

          <div className="flex items-center gap-2">

            <Package size={18} />

            <h3 className="font-semibold">
              {product.name}
            </h3>

          </div>

          <p className="mt-1 text-sm text-gray-500">
            SKU : {product.sku}
          </p>

          <p className="text-sm text-gray-500">
            HSN : {product.hsn}
          </p>

          <p className="text-sm text-gray-500">
            Brand : {product.brand}
          </p>

          <p className="text-sm text-gray-500">
            Stock : {product.stock}
          </p>

        </div>

        <div className="text-right">

          <p className="text-xl font-bold">
            ₹{Number(product.price).toLocaleString()}
          </p>

          <p className="text-sm text-green-600">
            GST {product.gst}%
          </p>

        </div>

      </div>

      <button
        onClick={() => onAdd(product)}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700"
      >
        <Plus size={18} />

        Add Product
      </button>

    </div>
  );
}
