import Link from "next/link";

export default function Header({ isHome }: { isHome?: boolean }) {
    return (
        <header>
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
