import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home({ children }: { children: React.ReactNode }) {
    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <Link href="/">About</Link>
                        </li>
                        <li>
                            <Link href="/">Posts</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <main>{children}</main>

            <footer>
                <p>Footer</p>
            </footer>
        </>
    );
}
