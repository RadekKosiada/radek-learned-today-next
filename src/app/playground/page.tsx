import { ReactNode } from "react";
import styles from "./playground.module.scss";
import Header from "../components/header";

function ExampleWrapper({ child }: { child: ReactNode }) {
    return <div className={styles.exampleWrapper}>{child}</div>;
}

export default function Playground() {
    const textExample1 = "Heading with interesting backround";
    const textExample2 = "Div with interesting background effect";
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <h1>Playground...</h1>
                <div className={styles.gridWrapper}>
                    <ExampleWrapper
                        child={
                            <div className={styles.example1Container}>
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
                            </div>
                        }
                    />
                    <ExampleWrapper
                        child={
                            <div className={styles.example2Container}>
                                <p>Example 2</p>
                                <h2>{textExample2}</h2>
                            </div>
                        }
                    />
                </div>
            </div>
        </>
    );
}
