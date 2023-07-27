import { useEffect, useState } from "react";

function getCurrentDimension() {
    return {
        width: window.innerWidth,
        height: window.innerHeight
    }
}
export const useWindowDimentions = () => {

    const [screenSize, setScreenSize] = useState(getCurrentDimension());

    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(getCurrentDimension())
        }
        window.addEventListener('resize', updateDimension);

        return (() => {
            window.removeEventListener('resize', updateDimension);
        })
    }, [screenSize]);


    return screenSize;
}