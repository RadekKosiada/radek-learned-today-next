import Link from "next/link";
import styles from "./header.module.css";

export default function Header({ isHome }: { isHome?: boolean }) {
    return (
        <header className={styles.headerWrapper}>
            <nav>
                <ul className={isHome ? styles.singleColumn : ""}>
                    {!isHome && (
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                    )}
                    <li>
                        <Link href="/about">About me</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
