"use client";
import ReactMarkdown from "react-markdown";
import styles from "./about.module.scss";
import variables from "../../../variables.module.scss";
import Plus from "../icons/plus";
import useIsMobile from "@/app/customHooks/useIsMobile";

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
    const isMobile = useIsMobile();
    const { fontSizeNav: iconSmall, fontSizeHalf: iconNormal } = variables;

    return (
        <div className={styles.wrapper}>
            <div className={styles.aboutHeader}>
                <h1>{title}</h1>

                {handleShowMoreAbout && (
                    <button
                        type="button"
                        className={
                            hideAbout ? styles.showMore : styles.showLess
                        }
                        onClick={handleShowMoreAbout}
                    >
                        <Plus
                            size={isMobile ? iconSmall : iconNormal}
                            fillColor={variables.primaryColor}
                        />
                    </button>
                )}
            </div>
            <div className={styles.textWrapper}>
                <ReactMarkdown>{text}</ReactMarkdown>
            </div>
        </div>
    );
}
