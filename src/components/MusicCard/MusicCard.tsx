interface IMusicCardProps {
  id: string;
  title: string;
  artist: string;
  bannerURL: string;
}

export const MusicCardBig = (props: IMusicCardProps) => {
  return (
    <div className="flex flex-col m-2">
      <img
        src={props.bannerURL}
        alt="avatar"
        className="h-full w-full rounded-md"
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
