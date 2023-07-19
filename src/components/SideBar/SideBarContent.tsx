import { MagnifyingGlass, House } from "@phosphor-icons/react";
import { useState } from "react";

export const SideBarContent = () => {
  const [selected, setSelected] = useState(0);
  const options = [
    {
      icon: <House size={28} weight="bold" />,
      label: "Home",
    },
    {
      icon: <MagnifyingGlass size={28} weight="bold" />,
      label: "Search",
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 border-b py-4 border-b-gray-700">
        {options.map((option, index) => {
          return (
            <div
              onClick={() => setSelected(index)}
              className={`flex items-center gap-4 cursor-pointer transition-colors text-gray-600 hover:text-white p-2 rounded-lg ${
                selected === index ? "text-white bg-gray-700" : ""
              }`}
            >
              {option.icon}
              <p>{option.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
