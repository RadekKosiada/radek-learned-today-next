import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Slug() {
    return (
        <>
            <Header />
            <Link href="/">Home</Link>
            <h1>Slug</h1>
            <Footer />
        </>
    );
}
