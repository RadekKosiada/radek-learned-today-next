import Link from "next/link";
import styles from "./header.module.css";

export default function Header({ isHome }: { isHome?: boolean }) {
    return (
        <header className={styles.headerWrapper}>
            <nav>
                <ul className={isHome ? styles.singleColumn : ""}>
                    {!isHome && (
                        <li key="home">
                            <Link href="/">Home</Link>
                        </li>
                    )}
                    <li key="about">
                        <Link href="/about">About me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
