"use client";
import { useState, useEffect } from "react";

export default function useIsMobile() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQueryList = window.matchMedia("(max-width: 991px)");

        const handleMediaQueryList = () => {
            setIsMobile(mediaQueryList.matches);
        };

        // to check the size after component mounts
        handleMediaQueryList();
        mediaQueryList.addEventListener("change", handleMediaQueryList);

        return () => {
            mediaQueryList.removeEventListener("change", handleMediaQueryList);
        };
    }, []);

    return isMobile;
}
