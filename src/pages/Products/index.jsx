import { useState } from "react";

import { useProductStore } from "../../store/useProductStore";

import ProductStats from "../../components/products/ProductStats";
import ProductToolbar from "../../components/products/ProductToolbar";
import ProductTable from "../../components/products/ProductTable";
import ProductModal from "../../components/products/ProductModal";
import DeleteProductDialog from "../../components/products/DeleteProductDialog";

export default function Products() {
  const products = useProductStore(
    (state) => state.products
  );

  const deleteProduct = useProductStore(
    (state) => state.deleteProduct
  );

  const [search, setSearch] = useState("");

  const [openModal, setOpenModal] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [editingProduct, setEditingProduct] =
    useState(null);

  const filteredProducts = products.filter(
    (product) => {
      const query = search.toLowerCase();

      return (
        product.name
          .toLowerCase()
          .includes(query) ||
        product.sku
          .toLowerCase()
          .includes(query) ||
        product.category
          .toLowerCase()
          .includes(query)
      );
    }
  );

  function handleEdit(product) {
    setEditingProduct(product);

    setOpenModal(true);
  }

  function handleDelete(product) {
    setSelectedProduct(product);

    setDeleteOpen(true);
  }

  function confirmDelete() {
    if (!selectedProduct) return;

    deleteProduct(selectedProduct.id);

    setDeleteOpen(false);

    setSelectedProduct(null);
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-4xl font-bold">
          Products
        </h1>

        <p className="mt-2 text-gray-500">
          Manage your products, inventory and GST.
        </p>

      </div>

      <ProductStats />

      <ProductToolbar
        search={search}
        setSearch={setSearch}
        onAddProduct={() => {
          setEditingProduct(null);
          setOpenModal(true);
        }}
      />

      <ProductTable
        products={filteredProducts}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      <ProductModal
        open={openModal}
        product={editingProduct}
        onClose={() => {
          setOpenModal(false);
          setEditingProduct(null);
        }}
      />

      <DeleteProductDialog
        open={deleteOpen}
        product={selectedProduct}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedProduct(null);
        }}
        onConfirm={confirmDelete}
      />

    </div>
  );
}