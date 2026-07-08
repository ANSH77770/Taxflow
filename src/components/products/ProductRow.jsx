import { Pencil, Trash2 } from "lucide-react";

export default function ProductRow({
  product,
  onEdit,
  onDelete,
}) {
  return (
    <tr className="border-b hover:bg-gray-50">

      <td className="p-4">{product.sku}</td>

      <td>{product.name}</td>

      <td>{product.category}</td>

      <td>₹{product.price}</td>

      <td>{product.gst}%</td>

      <td>{product.stock}</td>

      <td>

        <div className="flex justify-center gap-3">

          <button
            onClick={() => onEdit(product)}
            className="rounded p-1 hover:bg-blue-100"
          >
            <Pencil
              size={18}
              className="text-blue-600"
            />
          </button>

          <button
            onClick={() => onDelete(product)}
            className="rounded p-1 hover:bg-red-100"
          >
            <Trash2
              size={18}
              className="text-red-600"
            />
          </button>

        </div>

      </td>

    </tr>
  );
}