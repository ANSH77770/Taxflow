import { AlertTriangle } from "lucide-react";

export default function DeleteProductDialog({
  open,
  product,
  onClose,
  onConfirm,
}) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">

        <div className="flex items-center gap-3">

          <div className="rounded-full bg-red-100 p-3">
            <AlertTriangle
              className="text-red-600"
              size={24}
            />
          </div>

          <div>

            <h2 className="text-xl font-bold">
              Delete Product
            </h2>

            <p className="mt-1 text-gray-500">
              This action cannot be undone.
            </p>

          </div>

        </div>

        <div className="mt-6 rounded-lg border bg-gray-50 p-4">

          <p className="font-semibold">
            {product?.name}
          </p>

          <p className="text-sm text-gray-500">
            SKU : {product?.sku}
          </p>

        </div>

        <div className="mt-6 flex justify-end gap-3">

          <button
            onClick={onClose}
            className="rounded-lg border px-5 py-2 hover:bg-gray-100"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-600 px-5 py-2 text-white hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}