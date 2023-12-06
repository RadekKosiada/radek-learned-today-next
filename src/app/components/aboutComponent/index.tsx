import ReactMarkdown from "react-markdown";
import styles from "./about.module.scss";
import Duck from "@/app/components/icons/duck";
import variables from "../../../variables.module.scss";

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
    return (
        <div className={styles.wrapper}>
            <div className={styles.aboutHeader}>
                <h1>{title}</h1>

                <Duck
                    size={variables.fontSizeNav}
                    fillColor={variables.primaryColor}
                />
            </div>
            <div className={styles.textWrapper}>
                <ReactMarkdown>{text}</ReactMarkdown>
                {handleShowMoreAbout && (
                    <button
                        type="button"
                        className={styles.showMore}
                        onClick={handleShowMoreAbout}
                    >
                        {hideAbout ? "...show more" : "show less"}
                    </button>
                )}
            </div>
        </div>
    );
}
