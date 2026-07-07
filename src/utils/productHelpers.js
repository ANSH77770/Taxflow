export function getCategories(products) {
  const categories = [...new Set(products.map((p) => p.category))];
  return ["All", ...categories];
}

export function filterProducts(products, search, category) {
  return products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.sku.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });
}