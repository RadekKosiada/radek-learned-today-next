import Footer from "../components/footer";
import AboutComponent from "../components/about";
import Header from "../components/header";

export default function AboutPage() {
    return (
        <>
            <Header />
            <AboutComponent title="About me" text="hallo about me" />
            <Footer />
        </>
    );
}
