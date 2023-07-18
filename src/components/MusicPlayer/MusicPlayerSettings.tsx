import { SpeakerHigh } from "@phosphor-icons/react";

const MusicPlayerSettings = () => {
  return (
    <>
      <div className="w-32 flex items-center justify-center">
        <div className="w-full flex gap-2 items-center justify-center">
          <SpeakerHigh size={16} className="text-gray-600" />
          <div className="bg-gray-600 h-1 w-full rounded-full"></div>
        </div>
      </div>
    </>
  );
};

export default MusicPlayerSettings;
