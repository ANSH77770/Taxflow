import { create } from "zustand";
import { products } from "../data/products";

export const useProductStore = create((set) => ({

  products,

  addProduct: (product) =>
    set((state) => ({
      products: [
        ...state.products,
        {
          id: crypto.randomUUID(),
          ...product,
        },
      ],
    })),

  updateProduct: (id, updatedData) =>
    set((state) => ({
      products: state.products.map((product) =>
        product.id === id
          ? { ...product, ...updatedData }
          : product
      ),
    })),

  deleteProduct: (id) =>
    set((state) => ({
      products: state.products.filter(
        (product) => product.id !== id
      ),
    })),

}));