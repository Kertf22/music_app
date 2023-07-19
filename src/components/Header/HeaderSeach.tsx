import { MagnifyingGlass } from "@phosphor-icons/react"
import { useState } from "react"

export const HeaderSearch = () => {

    const [search, setSearch] = useState("")


    return (
        <>
            <div className={`check-input-focus relative text-md  ${search != "" ? 'text-white' : 'text-gray-400'}`} >
                <input type="text"
                    placeholder="Search"
                    prefix="Ola"
                    className="bg-gray-800 border-2 border-gray-700 text-white rounded-full pl-10 px-4 py-2 w-full max-w-sm " />
                <MagnifyingGlass size={20} weight="bold" className="absolute top-3 left-4" />
            </div>

        </>
    )
}