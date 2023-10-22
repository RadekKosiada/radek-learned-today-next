import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

import styles from "./posts.module.css";

import { client } from "../lib/contentful/client";

import { TypePost } from "../../../types/contentful";

export default async function Posts() {
    const response = await client.getEntries({ content_type: "post" });

    const { items: postsArray } = response;

    return (
        <>
            <Header />
            <Link href="/">Home</Link>
            <h1>Posts</h1>
            {postsArray.map((post: TypePost) => {
                const {
                    sys,
                    fields: { title, category, slug },
                } = post || {};

                return (
                    <div className={styles.post} key={sys.id}>
                        <Link href={`/${slug}`}>HERE</Link>
                        <h3>{title}</h3>
                        {category && <p>category: {category.fields.title}</p>}
                    </div>
                );
            })}
            <Footer />
        </>
    );
}
