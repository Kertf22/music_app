import { Headphones } from "@phosphor-icons/react";

export const SideBarHeader = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="text-gray-700 bg-green-900 rounded-full p-1 ">
        <Headphones size={24} weight="fill" />
      </div>
      <h1 className="text-green-800 text-2xl font-bold">Music App</h1>
    </div>
  );
};
