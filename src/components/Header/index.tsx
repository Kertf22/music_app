import { CaretLeft, CaretRight, User } from "@phosphor-icons/react";

export const Header = () => {
  return (
    <>
    <div className="flex flex-col gap-4 border-b border-b-gray-700 px-8 py-4 h-28">

      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-4">
          <div
            className={`flex justify-center items-center rounded-full p-2 bg-gray-700 text-white opacity-50 hover:text-white hover:opacity-100 cursor-pointer`}
          >
            <CaretLeft size={18} weight="bold" />
          </div>

          <div
            className={`flex justify-center items-center rounded-full p-2 bg-gray-700 text-white opacity-50 hover:text-white hover:opacity-100 cursor-pointer`}
          >
            <CaretRight size={18} weight="bold" />
          </div>
        </div>
        <div   className={`flex justify-center items-center rounded-full p-2 bg-gray-700 text-white hover:bg-black hover:text-white cursor-pointer`}>
        <User size={18} weight="bold" />
        </div>
      </div>
        <h1 className="text-white text-3xl font-bold">
        Resently Added
        </h1>
    </div>
    </>
  );
};
