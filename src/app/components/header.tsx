import Link from "next/link";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/posts">Posts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
