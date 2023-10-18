import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <h1>This is Home Screen</h1>
            {/* <main>{children}</main> */}
            <Footer />
        </>
    );
}
