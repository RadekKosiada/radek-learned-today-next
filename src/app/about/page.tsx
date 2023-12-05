import AboutComponent from "../components/aboutComponent";
import Header from "../components/header";

import styles from "./about.module.scss";
import { getAboutMe } from "../page";

export default async function AboutPage() {
    const responseAbout = await getAboutMe();

    const { items } = responseAbout;

    const {
        fields: { body: aboutText },
    } = items[0];

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <AboutComponent title="About me" text={aboutText} />
            </div>
        </>
    );
}
