import { useGlobalStore } from "../../domain/store/global"
import { SearchAll } from "./SearchAll"
import { SearchArtists } from "./SearchArtists"
import { SearchMusics } from "./SearchMusics"


export const SearchRoot = () => {

    const { selectedTag } = useGlobalStore()

    return (
        <div className="flex flex-col w-full h-full p-8">

            {selectedTag === "all" && <SearchAll />}
            
            {selectedTag === "musics" && <SearchMusics />}

            {selectedTag === "artists" && <SearchArtists />}

        </div>
    )
}