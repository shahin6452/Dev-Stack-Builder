import { useEffect, useState } from "react";
import Technology from "./Technology";
import type { TechnologyType } from "../Type";

interface TechnologiesProps {
  handleAddToStack: (technology: TechnologyType) => void;
  selectedStack: TechnologyType[];
}

export default function Technologies({
  handleAddToStack,
  selectedStack,
}: TechnologiesProps) {

  const [technologies, setTechnologies] = useState<TechnologyType[]>([]);

  useEffect(() => {
    fetch("/technologies.json")
      .then((res) => res.json())
      .then((data) => setTechnologies(data));
  }, []);

  return (
    <div>
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
    </div>
  );
}