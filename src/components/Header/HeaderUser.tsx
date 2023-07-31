import { User } from "@phosphor-icons/react"
import { useUserStore } from "../../domain/store/user"
import { Button } from "../../lib/components/ui/button";
import { Login } from "../Login";


export const HeaderUser = () => {

    const { user } = useUserStore();


    return (<>
        {user ?
            <div className={`flex justify-center items-center rounded-full p-2 bg-gray-700 text-white hover:bg-black hover:text-white cursor-pointer`}>
                <User size={18} weight="bold" />
            </div>
            : (
                <Login />
            )}
    </>
    )

}