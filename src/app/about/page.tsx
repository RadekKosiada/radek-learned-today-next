import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

export default function About() {
    return (
        <>
            <Header />
            <Link href="/">Home</Link>
            <h1>About</h1>
            <Footer />
        </>
    );
}
