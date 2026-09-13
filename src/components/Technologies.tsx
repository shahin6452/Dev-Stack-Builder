import { use } from "react";
import Technology from "./Technology";
import type { TechnologyType } from "../Type";

interface TechnologiesProps {
    dataPromise: Promise<TechnologyType[]>;
    handleAddToStack: (technology: TechnologyType) => void;
    selectedStack: TechnologyType[];
}

export default function Technologies({
    dataPromise,
    handleAddToStack,
    selectedStack,
}: TechnologiesProps) {

    const technologies = use(dataPromise);

    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {technologies.map((technology) => (
                <Technology
                    key={technology.id}
                    technology={technology}
                    handleAddToStack={handleAddToStack}
                    selectedStack={selectedStack}
                />
            ))}
        </div>
    );
}