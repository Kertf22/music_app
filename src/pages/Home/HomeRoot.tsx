import { } from "react";
import { useWindowDimentions } from "../../domain/hooks/useWindowDimentions";
import MusicCard from "../../components/MusicCard";
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

  const { width } = useWindowDimentions();

  let gridCols = 5;
  if (width < 768) {
    gridCols = 2
  } else if (width < 1024) {
    gridCols = 3
  } else if (width < 1280) {
    gridCols = 4
  }
  
  return (
    <div className={`grid`}
    
    style={{
      gridTemplateColumns: `repeat(${gridCols}, minmax(0, 1fr))`
    }}
    >
      {musicsData.map((music) => (
        <MusicCard.DEFAULT key={music.id} {...music} />
      ))}
    </div>
  );
};
