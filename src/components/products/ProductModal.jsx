import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useProductStore } from "../../store/useProductStore";

export default function ProductModal({
  open,
  onClose,
  product,
}) {
  const addProduct = useProductStore(
    (state) => state.addProduct
  );

  const updateProduct = useProductStore(
    (state) => state.updateProduct
  );

  const emptyForm = {
    sku: "",
    hsn: "",
    name: "",
    brand: "",
    category: "",
    unit: "",
    price: "",
    gst: "",
    discount: "",
    stock: "",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
    if (!open) return;

    if (product) {
      setForm({
        sku: product.sku || "",
        hsn: product.hsn || "",
        name: product.name || "",
        brand: product.brand || "",
        category: product.category || "",
        unit: product.unit || "",
        price: product.price || "",
        gst: product.gst || "",
        discount: product.discount || "",
        stock: product.stock || "",
      });
    } else {
      setForm(emptyForm);
    }
  }, [product, open]);

  if (!open) return null;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.sku ||
      !form.name ||
      !form.category ||
      !form.price
    ) {
      alert("Please fill all required fields.");
      return;
    }

    const payload = {
      ...form,
      price: Number(form.price),
      gst: Number(form.gst),
      discount: Number(form.discount),
      stock: Number(form.stock),
    };

    if (product) {
      updateProduct(product.id, payload);
    } else {
      addProduct(payload);
    }

    setForm(emptyForm);

    onClose();
  }

 return (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
    <div className="w-full max-w-3xl rounded-2xl bg-white shadow-xl">

      <div className="flex items-center justify-between border-b p-6">
        <h2 className="text-2xl font-bold">
          {product ? "Edit Product" : "Add Product"}
        </h2>

        <button onClick={onClose}>
          <X size={24} />
        </button>
      </div>

      <div className="p-6">

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4"
        >

          <input
            name="sku"
            value={form.sku}
            onChange={handleChange}
            placeholder="SKU"
            className="rounded-lg border p-3"
          />

          <input
            name="hsn"
            value={form.hsn}
            onChange={handleChange}
            placeholder="HSN Code"
            className="rounded-lg border p-3"
          />

          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="rounded-lg border p-3"
          />

          <input
            name="brand"
            value={form.brand}
            onChange={handleChange}
            placeholder="Brand"
            className="rounded-lg border p-3"
          />

          <input
            name="category"
            value={form.category}
            onChange={handleChange}
            placeholder="Category"
            className="rounded-lg border p-3"
          />

          <input
            name="unit"
            value={form.unit}
            onChange={handleChange}
            placeholder="Unit"
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            placeholder="Price"
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            name="gst"
            value={form.gst}
            onChange={handleChange}
            placeholder="GST %"
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            name="discount"
            value={form.discount}
            onChange={handleChange}
            placeholder="Discount %"
            className="rounded-lg border p-3"
          />

          <input
            type="number"
            name="stock"
            value={form.stock}
            onChange={handleChange}
            placeholder="Stock"
            className="rounded-lg border p-3"
          />

          <div className="col-span-2 mt-6 flex justify-end gap-3">

            <button
              type="button"
              onClick={() => {
                setForm(emptyForm);
                onClose();
              }}
              className="rounded-lg border px-5 py-2 hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700"
            >
              {product ? "Update Product" : "Save Product"}
            </button>

          </div>

        </form>

      </div>

    </div>
  </div>
);
}