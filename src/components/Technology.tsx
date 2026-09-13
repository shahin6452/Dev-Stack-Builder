import type { TechnologyType } from "../Type";

interface TechnologyProps {
    technology: TechnologyType;
    handleAddToStack: (technology: TechnologyType) => void;
    selectedStack: TechnologyType[];
}

export default function Technology({
    technology,
    handleAddToStack,
    selectedStack,
}: TechnologyProps) {

    const isAdded = selectedStack.some(
        (item) => item.id === technology.id
    );

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">

            <div className="flex items-start justify-between">
                <img
                    src={technology.icon}
                    alt={technology.name}
                    className="h-10 w-10"
                />

                <span className="rounded-full bg-pink-100 px-3 py-1 text-xs text-pink-600">
                    {technology.badge}
                </span>
            </div>

            <h2 className="mt-4 text-lg font-semibold">
                {technology.name}
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-500">
                {technology.description}
            </p>

            <div className="mt-4 flex items-center justify-between">

                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs">
                    {technology.category}
                </span>

                <span className="text-xs text-gray-500">
                    {technology.difficulty}
                </span>

            </div>

            <div className="mt-4 flex items-center justify-between">

                <span className="text-sm text-yellow-500">
                    ★ {technology.rating}
                </span>

                <button
                    onClick={() => handleAddToStack(technology)}
                    disabled={isAdded}
                    className={`rounded-md px-4 py-2 text-sm text-white ${isAdded
                            ? "cursor-not-allowed bg-gray-400"
                            : "bg-pink-600"
                        }`}
                >
                    {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>

            </div>

        </div>
    );
}