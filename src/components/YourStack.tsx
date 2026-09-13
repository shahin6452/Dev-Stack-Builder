import type { TechnologyType } from "../Type";

interface YourStackProps {
    selectedStack: TechnologyType[];
    handleRemove: (id: string) => void;
    handleRemoveAll: () => void;
}

export default function YourStack({
    selectedStack,
    handleRemove,
    handleRemoveAll,
}: YourStackProps) {

    return (
        <div className="rounded-xl border border-gray-200 bg-white p-5">

            <div className="flex items-center justify-between">

                <div>
                    <h2 className="text-lg font-semibold">
                        Your Stack
                    </h2>

                    <p className="text-sm text-gray-500">
                        {selectedStack.length} Technology Selected
                    </p>
                </div>

                {selectedStack.length > 0 && (
                    <button
                        onClick={handleRemoveAll}
                        className="text-sm text-red-500"
                    >
                        Remove All
                    </button>
                )}

            </div>

            {selectedStack.length === 0 ? (

                <div className="py-10 text-center text-sm text-gray-400">
                    No technologies added yet
                </div>

            ) : (

                <div className="mt-5 space-y-3">

                    {selectedStack.map((technology) => (

                        <div
                            key={technology.id}
                            className="flex items-center justify-between rounded-lg border border-gray-100 p-3"
                        >

                            <div className="flex items-center gap-3">

                                <img
                                    src={technology.icon}
                                    alt={technology.name}
                                    className="h-8 w-8"
                                />

                                <div>
                                    <h3 className="text-sm font-medium">
                                        {technology.name}
                                    </h3>

                                    <p className="text-xs text-gray-500">
                                        {technology.category}
                                    </p>
                                </div>

                            </div>

                            <button
                                onClick={() => handleRemove(technology.id)}
                                className="text-lg text-gray-400"
                            >
                                ✕
                            </button>

                        </div>

                    ))}

                </div>

            )}

        </div>
    );
}