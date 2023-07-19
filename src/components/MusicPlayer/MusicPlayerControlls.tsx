import React from "react";
import {
  CaretLeft,
  CaretRight,
  Play,
  ArrowsCounterClockwise,
  ArrowsLeftRight,
} from "@phosphor-icons/react";
{
  /* <Pause  size={32} /> */
}

const MusicPlayerControlls = () => {
  return (
    <>
      <div className="flex flex-col w-[80%] justify-center items-center gap-5">
        <div className="flex justify-center items-center gap-4">
          <ArrowsLeftRight
            size={20}
            className="text-gray-600 cursor-pointer hover:text-gray-200"
          />
          <CaretLeft
            size={20}
            className="text-gray-600 cursor-pointer hover:text-gray-200"
          />
          <div className="flex justify-center items-center rounded-full p-2 bg-gray-600 hover:text-white hover:bg-gray-200 cursor-pointer">
            <Play
              size={20}
              weight="fill"
              className="text-gray-800 cursor-pointer"
            />
          </div>
          <CaretRight
            size={20}
            className="text-gray-600 cursor-pointer hover:text-gray-200"
          />
          <ArrowsCounterClockwise
            size={20}
            className="text-gray-600 cursor-pointer hover:text-gray-200"
          />
        </div>
        <div className="flex flex-row w-full max-w-2xl justify-center items-center gap-2">
          <p className="text-gray-700 text-xs whitespace-nowrap">00:00</p>
          <div className="bg-gray-600 h-1 w-full rounded-full"></div>
          <p className="text-gray-700 text-xs whitespace-nowrap">00:00</p>
        </div>
      </div>
    </>
  );
};

export default MusicPlayerControlls;
