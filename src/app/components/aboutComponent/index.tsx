import ReactMarkdown from "react-markdown";
import styles from "./about.module.scss";
import variables from "../../../variables.module.scss";
import Plus from "../icons/plus";
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

                {handleShowMoreAbout && (
                    <button
                        type="button"
                        className={
                            hideAbout ? styles.showMore : styles.showLess
                        }
                        onClick={handleShowMoreAbout}
                    >
                        <Plus
                            size={variables.fontSizeNav}
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
