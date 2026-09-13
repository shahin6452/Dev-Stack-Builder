import type { TechnologyType } from "../Type";
import { FaXmark } from "react-icons/fa6";

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
        <div className="rounded-xl border border-gray-200 bg-white p-5 h-fit">

            <div>

                <h2 className="text-lg font-semibold">
                    Your Stack
                </h2>

                <p className="text-sm text-gray-500">
                    {selectedStack.length === 0
                        ? 'No technologies selected yet.'
                        : `${selectedStack.length} Technology Selected`}
                </p>

            </div>

            {selectedStack.length === 0 ? (

                <div className="mt-3 rounded-xl border border-dashed border-gray-300 py-5 text-center text-sm text-gray-400">
                    Your stack is empty.
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
                                className="text-lg text-gray-400 cursor-pointer transition"
                            >
                                <FaXmark />
                            </button>

                        </div>

                    ))}

                    <button
                        onClick={handleRemoveAll}
                        className="mt-5 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500 cursor-pointer transition"
                    >
                        Remove All
                    </button>

                </div>

            )}

        </div>
    );
}