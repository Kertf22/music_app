import { Heart, Timer } from "@phosphor-icons/react";
import Music from "../../types/music";



interface MusicComponentProps {
    title: string;
    artist: string;
}

const MusicComponent = ({
    title,
    artist
}: MusicComponentProps) => {
    return (
        <>
            <div className="w-64 flex gap-2">
                <img
                    src="https://source.unsplash.com/random"
                    alt="avatar"
                    className="w-12 h-12 rounded-sm"
                />
                <div className="flex flex-col gap-1">
                    <p className="text-gray-200 text-md hover:underline cursor-pointer">{title}</p>
                    <p className="text-gray-600 text-xs hover:underline cursor-pointer">{artist}</p>
                </div>
                <Heart size={15} className="text-gray-500 mt-2 ml-2 hover:text-gray-200 cursor-pointer" />
            </div>
        </>
    );
};



export const SearchMusics = () => {

    const musics: Music[] = [];

    for (let i = 0; i < 40; i++) {
        musics.push({
            id: i.toString(),
            title: "Music Title",
            artist: "Music Artist",
            music_time: "3:30",
            bannerURL: `https://picsum.photos/seed/${i}/400/400`,
            views: Math.ceil(1000 * Math.random())
        })
    }

    return (
        <div className="flex w-full">
            <table className="table-auto w-full">
                <thead className="text-gray-300 text-sm border-b border-gray-400">
                    <tr>
                        <th className="py-1 pb-4">
                            <p className="flex items-center">
                                #
                            </p>
                        </th>
                        <th className="py-1 pb-4">
                            <p className="flex items-center">
                                Title
                            </p>
                        </th>

                        <th className="py-1 pb-4">
                            <p className="flex items-center">
                                Views
                            </p>
                        </th>
                        <th className="py-1 pb-4">
                            <p className="flex items-center"><Timer size={16} />
                            </p>
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-300 text-sm">
                    {musics.map((music, i) => (
                        <tr>
                            <td className="py-3">
                                <p className="flex items-center">
                                    {i}
                                </p>
                            </td>
                            <td className="py-3">
                                <MusicComponent title={music.title} artist={music.artist} />
                            </td>
                            <td className="py-3">{music.views}</td>
                            <td className="py-3">{music.music_time}</td>
                        </tr>

                    ))}

                </tbody>
            </table>
        </div>
    )
}