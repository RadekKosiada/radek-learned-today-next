"use client";

import { usePathname } from "next/navigation";
import { MouseEvent, useState } from "react";
import variables from "../../../variables.module.scss";
import Duck from "@/app/components/icons/duck";
import Link from "next/link";
import styles from "./header.module.scss";
import useIsMobile from "@/app/customHooks/useIsMobile";

export default function Header() {
    const pathname = usePathname();
    const isMobile = useIsMobile();

    const [burgerIsChecked, setBurgerIsChecked] = useState(false);

    const handleCheck = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setBurgerIsChecked(!burgerIsChecked);
    };

    const homePathname = "/";
    const playgroundPathname = "/playground";
    const aboutPathname = "/about";

    return (
        <header className={styles.headerWrapper}>
            <nav>
                <div className={styles.mainLogo}>
                    <Link href={homePathname} aria-label="Back to home page">
                        <Duck
                            size={variables.fontSizeHalf}
                            fillColor={variables.primaryColor}
                        />
                    </Link>
                </div>

                <ul
                    className={
                        isMobile && burgerIsChecked
                            ? styles.vertical
                            : styles.horizontal
                    }
                >
                    {pathname !== playgroundPathname && (
                        <li key={"playground"}>
                            <Link
                                href={playgroundPathname}
                                aria-label="Go to Playground"
                            >
                                Playground
                            </Link>
                        </li>
                    )}
                    {pathname !== aboutPathname && (
                        <li key="about">
                            <Link
                                href={aboutPathname}
                                aria-label="Back to About Me page"
                            >
                                About me
                            </Link>
                        </li>
                    )}
                </ul>
                {/* display: none set in SCSS if screen > 992px */}
                <div className={styles.checkboxWrapper} onClick={handleCheck}>
                    <label>
                        <input
                            type="checkbox"
                            checked={burgerIsChecked}
                            readOnly
                        />
                        <div
                            className={styles.menuButton}
                            role="checkbox"
                            aria-checked={burgerIsChecked}
                        ></div>
                    </label>
                </div>
            </nav>
        </header>
    );
}
