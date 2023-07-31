import { useGlobalStore } from "../../domain/store/global";


interface TagProps {
    selected?: boolean;
    value: string;
    name: string;
    onClick: (v: string) => void;
}
const SearchTag = ({ selected, value, name, onClick }: TagProps) => {
    return (
        <div className={`p-2 px-4 rounded-full text-white text-xs cursor-pointer hover:bg-gray-300 ${selected ? 'bg-gray-300' : 'bg-gray-600 '}`} onClick={() => onClick(value)}>
            {name}
        </div>
    )
}


interface TagData {
    value: SearchTag;
    name: string
}

export const HeaderSearchTags = () => {

    const tags: TagData[] = [{
        value: "all",
        name: "All"
    },
    {
        value: "musics",
        name: "Musics"
    },
    {
        value: "artists",
        name: "Artists"
    }
    ]

    const { selectedTag, setSelectedTag } = useGlobalStore()
    return (
        <>
            <div className="flex gap-2">
                {tags.map((tag: TagData) => (
                    <SearchTag
                        key={tag.value}
                        value={tag.value}
                        name={tag.name}
                        onClick={(v: SearchTag) => setSelectedTag(v)}
                        selected={selectedTag === tag.value} />
                ))}
            </div>
        </>
    )

}