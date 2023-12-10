import { useState, useEffect } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(
        window.matchMedia("(max-width: 991px)").matches
    );

    useEffect(() => {
        const mediaQueryList = window.matchMedia("(max-width: 991px)");

        const handleResize = () => {
            setIsMobile(mediaQueryList.matches);
        };

        mediaQueryList.addEventListener("change", handleResize);

        return () => {
            mediaQueryList.removeEventListener("change", handleResize);
        };
    }, []);

    return isMobile;
}
