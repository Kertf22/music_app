import MusicPlayerControlls from "./MusicPlayerControlls";
import MusicPlayerInfo from "./MusicPlayerInfo";
import MusicPlayerSettings from "./MusicPlayerSettings";



const MusicPlayerRoot = ({children}:{children: React.ReactNode}) => {
  return (
    <>
      <div className="bg-gray-800 w-full h-28 p-5 rounded-b-xl border-t border-t-green-200 flex justify-between">
        {children}

      </div>
    </>
  );
};

export default MusicPlayerRoot;
