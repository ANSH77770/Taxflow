import { Package, Boxes, AlertTriangle, IndianRupee } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useProductStore } from "../../store/useProductStore";

export default function ProductStats() {
  const products = useProductStore((state) => state.products);

  const totalProducts = products.length;

  const categories = [
    ...new Set(products.map((p) => p.category)),
  ].length;

  const inventoryValue = products.reduce(
    (sum, product) =>
      sum + product.price * (product.stock || 0),
    0
  );

  const lowStock = products.filter(
    (product) => (product.stock || 0) < 10
  ).length;

  const cards = [
    {
      title: "Products",
      value: totalProducts,
      icon: Package,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Categories",
      value: categories,
      icon: Boxes,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Inventory Value",
      value: `₹${inventoryValue.toLocaleString("en-IN")}`,
      icon: IndianRupee,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Low Stock",
      value: lowStock,
      icon: AlertTriangle,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon = card.icon;

        return (
          <Card
            key={card.title}
            className="rounded-2xl p-6 shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <div className={`rounded-2xl p-4 ${card.color}`}>
                <Icon size={28} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}