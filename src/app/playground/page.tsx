import { ReactNode } from "react";
import styles from "./playground.module.scss";
import Header from "../components/header";

function ExampleWrapper({ child }: { child: ReactNode }) {
    return <div className={styles.exampleWrapper}>{child}</div>;
}

export default function Playground() {
    const textExample1 = "Heading with interesting backround";
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <h1>Playground...</h1>
                <div className={styles.gridWrapper}>
                    <ExampleWrapper
                        child={
                            <>
                                <p>
                                    Example 1: see also post <br />
                                    <i>CSS: Using attr()...</i>
                                </p>
                                <h2
                                    data-text={textExample1}
                                    className={styles.example1Text}
                                >
                                    {textExample1}
                                </h2>
                            </>
                        }
                    />
                </div>
            </div>
        </>
    );
}
