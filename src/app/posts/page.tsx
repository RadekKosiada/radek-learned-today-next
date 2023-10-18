import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Posts() {
    return (
        <>
            <Header />
            <Link href="/">Home</Link>
            <h1>Posts</h1>
            <Footer />
        </>
    );
}
