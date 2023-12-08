"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

export default function Header() {
    const pathname = usePathname();
    const [burgerIsChecked, setBurgerIsChecked] = useState(false);

    const handleCheck = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setBurgerIsChecked(!burgerIsChecked);
    };

    const handleResize = () => {
        if (window.innerWidth >= 992) {
            setBurgerIsChecked(false);
        }
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const homePathname = "/";
    const playgroundPathname = "/playground";
    const aboutPathname = "/about";

    return (
        <header className={styles.headerWrapper}>
            <nav>
                <ul
                    className={
                        burgerIsChecked ? styles.vertical : styles.horizontal
                    }
                >
                    {pathname !== homePathname && (
                        <li key="posts">
                            <Link href={homePathname}>Back to Posts</Link>
                        </li>
                    )}
                    {pathname !== playgroundPathname && (
                        <li key={"playground"}>
                            <Link href={playgroundPathname}>Playground</Link>
                        </li>
                    )}
                    {pathname !== aboutPathname && (
                        <li key="about">
                            <Link href={aboutPathname}>About me</Link>
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
