"use client";
import Markdown from "markdown-to-jsx";
import styles from "./about.module.scss";

import PlusButton from "../plusButton";
import { usePathname } from "next/navigation";

export default function AboutComponent({
    title,
    text,
    handleShowMoreAbout,
    hideAbout,
}: {
    title: string;
    text: string;
    handleShowMoreAbout?: () => void;
    hideAbout?: boolean;
}) {
    const pathname = usePathname();

    return (
        <div className={styles.wrapper}>
            <div>
                <div className={styles.aboutHeader}>
                    <h1>{title}</h1>

                    {handleShowMoreAbout && (
                        <PlusButton
                            hideAbout={!!hideAbout}
                            handleShowMoreAbout={handleShowMoreAbout}
                        />
                    )}
                </div>
                <div className={styles.textWrapper}>
                    <Markdown>{text}</Markdown>
                </div>
            </div>

            {pathname === "/about" ? (
                <div className={styles.pic}></div>
            ) : undefined}
        </div>
    );
}
