import Footer from "../components/footer";
import AboutComponent from "../components/aboutComponent";
import Header from "../components/header";

import styles from "./about.module.scss";

export default function AboutPage() {
    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                <AboutComponent title="About me" text="hallo about me" />
            </div>
            <Footer />
        </>
    );
}
