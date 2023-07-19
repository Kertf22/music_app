import { MagnifyingGlass, House } from "@phosphor-icons/react";
import { useState } from "react";
import { useGlobalStore } from "../../store/global";
import { HOME_PAGE, SEARCH_PAGE } from "../../constants/pages";
import Search from "../../pages/Search";
import { Page } from "../../types/page";

interface IOption {
  icon: React.ReactNode;
  value: Page;
}

export const SideBarContent = () => {

  const { page, setPage } = useGlobalStore();

  const options: IOption[] = [
    {
      icon: <House size={28} weight="bold" />,
      value: HOME_PAGE,
    },
    {
      icon: <MagnifyingGlass size={28} weight="bold" />,
      value: SEARCH_PAGE,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2 border-b py-4 border-b-gray-700 ">
        {options.map((option, index) => {
          return (
            <div
              onClick={() => setPage(option.value)}
              className={`flex items-center gap-4 cursor-pointer transition-colors text-gray-600 hover:text-white p-2 rounded-lg ${page.name === option.value.name ? "text-white bg-gray-700" : ""
                }`}
            >
              {option.icon}
              <p>{option.value.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
