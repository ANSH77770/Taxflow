import { useMemo, useState } from "react";

import ProductSearch from "./ProductSearch";
import ProductCategoryFilter from "./ProductCategoryFilter";
import ProductCard from "./ProductCard";

import { useProductStore } from "../../store/useProductStore";
import { useInvoiceStore } from "../../store/useInvoiceStore";

export default function ProductSelector() {

  const products = useProductStore(
    (state) => state.products
  );

  const addProduct = useInvoiceStore(
    (state) => state.addProduct
  );

  const [search, setSearch] = useState("");

  const [category, setCategory] =
    useState("All");

  const categories = useMemo(() => {

    return [

      "All",

      ...new Set(
        products.map(
          (product) => product.category
        )
      ),

    ];

  }, [products]);

  const filteredProducts = useMemo(() => {

    return products.filter((product) => {

      const matchCategory =
        category === "All" ||
        product.category === category;

      const query = search.toLowerCase();

      const matchSearch =

        product.name
          .toLowerCase()
          .includes(query)

        ||

        product.sku
          .toLowerCase()
          .includes(query)

        ||

        product.brand
          .toLowerCase()
          .includes(query);

      return matchCategory && matchSearch;

    });

  }, [products, category, search]);

  return (

    <div className="space-y-6">

      <ProductSearch
        value={search}
        onChange={setSearch}
      />

      <ProductCategoryFilter
        categories={categories}
        selected={category}
        onSelect={setCategory}
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
            onAdd={addProduct}
          />

        ))}

      </div>

    </div>

  );

}