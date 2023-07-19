import { CaretLeft, CaretRight } from "@phosphor-icons/react";

export const HeaderControlls = () => {
    return (
        <div className="flex items-center gap-4">
            <div
                className={`flex justify-center items-center rounded-full p-2 bg-gray-700 text-white opacity-50 hover:text-white hover:opacity-100 cursor-pointer`}
            >
                <CaretLeft size={18} weight="bold" />
            </div>

            <div
                className={`flex justify-center items-center rounded-full p-2 bg-gray-700 text-white opacity-50 hover:text-white hover:opacity-100 cursor-pointer`}
            >
                <CaretRight size={18} weight="bold" />
            </div>
        </div>
    )
}