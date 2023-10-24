import Header from "./components/header";
import Footer from "./components/footer";
import Posts from "./posts/page";

export default function Home() {
    return (
        <>
            <Header />
            <h1>About this blog</h1>
            <p>placeholder paragraph</p>
            {/* @ts-expect-error Server Component */}
            <Posts />
            <Footer />
        </>
    );
}
