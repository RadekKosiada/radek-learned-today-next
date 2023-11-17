"use client";

import Link from "next/link";
import styles from "./header.module.scss";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();

    const homePathname = "/";
    const playgroundPathname = "/playground";
    const aboutPathname = "/about";

    return (
        <header className={styles.headerWrapper}>
            <nav>
                <ul>
                    {pathname !== homePathname && (
                        <li key="home">
                            <Link href={homePathname}>Home</Link>
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
            </nav>
        </header>
    );
}
