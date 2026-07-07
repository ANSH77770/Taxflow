import { IndianRupee, Users, Receipt, BadgeIndianRupee } from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Revenue",
    value: "₹2,45,600",
    icon: IndianRupee,
    color: "text-green-600",
  },
  {
    title: "Customers",
    value: "186",
    icon: Users,
    color: "text-blue-600",
  },
  {
    title: "Invoices",
    value: "534",
    icon: Receipt,
    color: "text-orange-600",
  },
  {
    title: "GST Collected",
    value: "₹38,900",
    icon: BadgeIndianRupee,
    color: "text-purple-600",
  },
];

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
          >
            <Card className="rounded-2xl p-6 shadow-md hover:shadow-xl transition-all">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500">{card.title}</p>

                  <h2 className="mt-3 text-3xl font-bold">
                    {card.value}
                  </h2>
                </div>

                <Icon
                  className={`${card.color}`}
                  size={38}
                />
              </div>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}