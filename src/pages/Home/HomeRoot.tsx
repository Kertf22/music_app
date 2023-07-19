import { MusicCard } from "../../components/MusicCard/MusicCardRoot";

interface IMusicData {
  id: string;
  title: string;
  artist: string;
  bannerURL: string;
}
export const HomeRoot = () => {
  const musicsData: IMusicData[] = [];

  for (let i = 0; i < 18; i++) {
    musicsData.push({
      id: i.toString(),
      title: "Song Name",
      artist: "Elton Json",
      bannerURL: "https://source.unsplash.com/random",
    });
  }

  return (
    <div className="flex flex-row flex-wrap p-8 overflow-auto z-0 relative h-fll">
      {musicsData.map((music) => (
        <MusicCard key={music.id} {...music} />
      ))}
    </div>
  );
};
