import styles from "./about.module.scss";

export default function AboutComponent({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <div className={styles.wrapper}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}
