import { Heart } from "@phosphor-icons/react";

const MusicPlayerInfo = () => {
    return (
      <>
        <div className="w-64 flex gap-2">
          <img
            src="https://source.unsplash.com/random"
            alt="avatar"
            className="w-16 h-16"
          />
          <div className="flex flex-col">
            <p className="text-gray-200 text-sm">Song Name</p>
            <p className="text-gray-600 text-xs">Elton Json </p>
          </div>
            <Heart size={15} className="text-gray-500 mt-2 ml-2 hover:text-gray-200 cursor-pointer" />
        </div>
      </>
    );
  };

export default MusicPlayerInfo;