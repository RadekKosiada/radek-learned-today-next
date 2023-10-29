import Footer from "../components/footer";
import Header from "../components/header";
import AboutComponent from "../components/about";

export default function AboutPage() {
    return (
        <>
                <Header />
            <AboutComponent title="About me" text="hallo about me" />
            <Footer />
        </>
    );
}
