


interface ArtistData {
    id: string;
    name: string;
    imageURL: string;
}


export const ArtistCard = ({ id, name, imageURL }: ArtistData) => {
    return (
        <div className="flex flex-col bg-gray-800 p-4 py-6 gap-4 rounded-lg hover:bg-gray-600 cursor-pointer max-w-[206px]">
            <img src={imageURL} alt={name} className="rounded-full max-w-[206px]" />
            <p className="text-gray-200 text-md font-bold">
                {name}
            </p>
        </div>
    )
}

export const SearchArtists = () => {

    const artist: ArtistData[] = [];

    for (let i = 0; i < 20; i++) {
        artist.push({
            id: i.toString(),
            name: `Artist ${i}`,
            imageURL: `https://picsum.photos/seed/${i}/400/400`
        });
    }

    return (
        <div className="flex flex-row justify-start items-cente flex-wrap w-full gap-4 pb-8">
            {artist.map(a => (
                <ArtistCard key={a.id} id={a.id} name={a.name} imageURL={a.imageURL} />
            ))}
        </div>
    )

}