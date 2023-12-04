import ReactMarkdown from "react-markdown";
import styles from "./about.module.scss";
import Duck from "@/app/components/icons/duck";
import variables from "../../../variables.module.scss";

export default function AboutComponent({
    title,
    text,
}: {
    title: string;
    text: string;
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
            <ReactMarkdown>{text}</ReactMarkdown>
        </div>
    );
}
