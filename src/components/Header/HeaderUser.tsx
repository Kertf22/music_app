import { User } from "@phosphor-icons/react"


export const HeaderUser = () => {
    return (
        <div className={`flex justify-center items-center rounded-full p-2 bg-gray-700 text-white hover:bg-black hover:text-white cursor-pointer`}>
            <User size={18} weight="bold" />
        </div>
    )
}