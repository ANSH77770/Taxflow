import ProductRow from "./ProductRow";

export default function ProductTable({
  products,
  onEdit,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-100">

          <tr>

            <th className="p-4 text-left">
              SKU
            </th>

            <th className="text-left">
              Product
            </th>

            <th className="text-left">
              Category
            </th>

            <th className="text-left">
              Price
            </th>

            <th className="text-left">
              GST
            </th>

            <th className="text-left">
              Stock
            </th>

            <th className="text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {products.length ? (
            products.map((product) => (
              <ProductRow
                key={product.id}
                product={product}
                onEdit={onEdit}
                onDelete={onDelete}
              />
            ))
          ) : (
            <tr>

              <td
                colSpan={7}
                className="py-10 text-center text-gray-500"
              >
                No products found.
              </td>

            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}