interface IMusicCardProps {
  id: string;
  title: string;
  artist: string;
  bannerURL: string;
}

export const MusicCard = (props: IMusicCardProps) => {
  return (
    <div className="flex flex-col m-2 max-w-[208px] w-full flex-shrink-0">
      <img
        src={props.bannerURL}
        alt="avatar"
        className="max-w-[208px] max-h-[208px] h-full w-full rounded-md"
      />
      <div className="flex flex-col">
        <p className="text-gray-200 text-sm hover:underline cursor-pointer">
          {props.title}
        </p>
        <p className="text-gray-600 text-xs hover:underline cursor-pointer">
          {props.artist}
        </p>
      </div>
    </div>
  );
};
