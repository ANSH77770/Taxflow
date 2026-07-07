export default function ProductCategoryFilter({
  categories,
  selected,
  onSelect,
}) {
  return (
    <div className="flex flex-wrap gap-3">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition

            ${
              selected === category
                ? "bg-blue-600 text-white"
                : "border bg-white hover:bg-gray-100"
            }
          `}
        >
          {category}
        </button>
      ))}

    </div>
  );
}