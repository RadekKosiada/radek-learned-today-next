import Header from "./components/header";
import Footer from "./components/footer";
import Posts from "./posts/page";

export default function Home() {
    return (
        <>
            <Header isHome={true} />
            <Posts />
            <Footer />
        </>
    );
}
