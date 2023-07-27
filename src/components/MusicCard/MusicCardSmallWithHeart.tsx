import { Heart } from "@phosphor-icons/react";

interface MusicWithCardProps {
    title: string;
    artist: string;
}

const MusicCardSmallWithHeart = ({
    title,
    artist
}: MusicWithCardProps) => {
    return (
        <>
            <div className="w-64 flex gap-2">
                <img
                    src="https://source.unsplash.com/random"
                    alt="avatar"
                    className="w-12 h-12 rounded-sm"
                />
                <div className="flex flex-col">
                    <p className="text-gray-200 text-sm hover:underline cursor-pointer">{title}</p>
                    <p className="text-gray-600 text-xs hover:underline cursor-pointer">{artist}</p>
                </div>
                <Heart size={15} className="text-gray-500 mt-2 ml-2 hover:text-gray-200 cursor-pointer" />
            </div>
        </>
    );
};

export default MusicCardSmallWithHeart;