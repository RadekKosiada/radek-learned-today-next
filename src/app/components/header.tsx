import Link from "next/link";
import styles from "./header.module.css";

export default function Header({ isHome }: { isHome?: boolean }) {
    return (
        <header className={styles.headerWrapper}>
            <nav>
                <ul>
                    <li>
                        <Link href="/about">About me</Link>
                    </li>
                    {!isHome && (
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
}
