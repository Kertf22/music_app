import MusicCard from "../../components/MusicCard";
import Music from "../../domain/types/music";
import { ArtistCard } from "./SearchArtists";

interface ArtistData {
    id: string;
    name: string;
    imageURL: string;
}

export const SearchAll = () => {

    const musics: Music[] = [];

    for (let i = 0; i < 4; i++) {
        musics.push({
            id: i.toString(),
            title: "Music Title",
            artist: "Music Artist",
            music_time: "3:30",
            bannerURL: `https://picsum.photos/seed/${i}/400/400`,
            views: Math.ceil(1000 * Math.random())
        })
    }

    const artist: ArtistData[] = [];

    for (let i = 0; i < 8; i++) {
        artist.push({
            id: i.toString(),
            name: `Artist ${i}`,
            imageURL: `https://picsum.photos/seed/${i}/400/400`
        });
    }

    return (
        <div className="flex flex-col gap-4 pb-8 relative">
            <div className="flex gap-4">
                <div className="flex flex-col gap-4 w-full max-w-sm">
                    <h1 className="text-xl text-white font-semibold">
                        Best result
                    </h1>
                    <div className="flex flex-col bg-gray-800 p-6 rounded-md gap-4">
                        <img src="https://picsum.photos/seed/1/400/400" alt="Music Cover" className="w-28 h-28 rounded-md" />

                        <div className="flex flex-col gap-1">
                            <p className="text-gray-200 text-2xl font-bold">
                                Music Title
                            </p>
                            <p className="text-gray-300 text-sm font-regular">
                                Artist
                            </p>
                        </div>

                    </div>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <h1 className="text-xl text-white font-semibold">
                        Musics
                    </h1>
                    <div className="flex flex-col gap-4 justify-center items-center h-full">
                        {musics.map(m => (
                            <MusicCard.SmallWithTime key={m.id} id={m.id} title={m.title} artist={m.artist} bannerURL={m.bannerURL} music_time={m.music_time} />
                        ))}
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h1 className="text-xl text-white font-semibold">
                    Artists
                </h1>
                <div className="flex flex-col gap-4 h-full">
                    <div className="flex flex-row gap-4 h-full w-full overflow-x-hidden ">
                        {artist.map(a => (
                            <ArtistCard key={a.id} id={a.id} name={a.name} imageURL={a.imageURL} />
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}