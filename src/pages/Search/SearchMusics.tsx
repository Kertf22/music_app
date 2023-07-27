import { Timer } from "@phosphor-icons/react";
import Music from "../../types/music";
import MusicCard from "../../components/MusicCard";

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
                                <MusicCard.SmallWithHeart title={music.title} artist={music.artist} />
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