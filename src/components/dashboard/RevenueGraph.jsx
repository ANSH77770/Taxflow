import { Card } from "@/components/ui/card";

const monthlyData = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 55 },
  { month: "Mar", value: 42 },
  { month: "Apr", value: 70 },
  { month: "May", value: 52 },
  { month: "Jun", value: 88 },
  { month: "Jul", value: 66 },
];

export default function RevenueGraph() {
  const max = Math.max(
    ...monthlyData.map((m) => m.value)
  );

  return (
    <Card className="rounded-2xl p-6 shadow-md mb-8">

      <div className="flex items-center justify-between mb-8">

        <div>
          <h2 className="text-2xl font-bold">
            Monthly Revenue
          </h2>

          <p className="text-gray-500">
            Revenue generated this year
          </p>
        </div>

      </div>

      <div className="flex items-end justify-between h-72">

        {monthlyData.map((item) => (

          <div
            key={item.month}
            className="flex flex-col items-center flex-1"
          >

            <div
              className="w-10 rounded-t-xl bg-blue-600 hover:bg-blue-700 transition-all"
              style={{
                height: `${
                  (item.value / max) * 220
                }px`,
              }}
            />

            <span className="mt-3 text-sm text-gray-600">
              {item.month}
            </span>

          </div>

        ))}

      </div>

    </Card>
  );
}