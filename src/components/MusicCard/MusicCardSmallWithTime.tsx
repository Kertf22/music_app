
interface IMusicCardSmallWithTimeProps {
    id: string;
    title: string;
    artist: string;
    music_time: string;
    bannerURL: string;
}

const MusicCardSmallWithTime = (props: IMusicCardSmallWithTimeProps) => {
    return (
        <div className="flex flex-row w-full justify-between items-center">
            <div className="flex flex-row gap-4">
                <img
                    src={props.bannerURL}
                    alt="avatar"
                    className="w-10 h-10 rounded-md"
                />
                <div className="flex flex-col">
                    <p className="text-gray-200 text-md hover:underline cursor-pointer">
                        {props.title}
                    </p>
                    <p className="text-gray-600 text-xs hover:underline cursor-pointer">
                        {props.artist}
                    </p>
                </div>
            </div>

            <p className="text-gray-200 text-sm">
                {props.music_time}
            </p>

        </div>
    );
};


export default MusicCardSmallWithTime;