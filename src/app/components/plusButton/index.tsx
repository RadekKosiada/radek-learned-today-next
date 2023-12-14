import styles from "./plus.module.scss";
import { useEffect, useState } from "react";

export default function PlusButton({
    handleShowMoreAbout,
    hideAbout,
}: {
    handleShowMoreAbout: () => void;
    hideAbout: boolean;
}) {
    const [buttonClass, setButtonClass] = useState(styles.plusWrapper);

    useEffect(() => {
        if (hideAbout) {
            setButtonClass(styles.plusWrapper);
        } else {
            setButtonClass([styles.plusWrapper, styles.active].join(" "));
        }
    }, [hideAbout]);

    return (
        <div
            role="button"
            className={styles.container}
            onClick={handleShowMoreAbout}
        >
            <div className={buttonClass}>
                <div></div>
            </div>
        </div>
    );
}
