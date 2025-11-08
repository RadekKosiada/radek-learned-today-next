import AboutComponent from "../components/aboutComponent";
import Header from "../components/header";

import { TypeAboutMeFields } from "../../../types/contentful/TypeAboutMe";
import { isEntryWithFields } from "../../../utils";
import getAboutMe from "../../api/getAboutMe";
import styles from "./about.module.scss";

export default async function AboutPage() {
    const responseAbout = await getAboutMe();

    const { items } = responseAbout;

    const fields = items[0] && isEntryWithFields<TypeAboutMeFields>(items[0]) ? items[0].fields : undefined;
    const aboutText = fields?.body ?? "";

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <AboutComponent title="About me" text={aboutText} />
            </div>
        </>
    );
}
