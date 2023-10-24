import Link from "next/link";

import styles from "./posts.module.css";

import { client } from "../lib/contentful/client";

import { TypePost } from "../../../types/contentful";
import { responseType } from "../../../types/contentful/TypePost";
import AboutComponent from "../components/about";

// https://nextjs.org/docs/app/building-your-application/caching#request-memoization
export async function getPosts() {
    const response: responseType = await client.getEntries({
        content_type: "post",
    });
    return response;
}

export default async function Posts() {
    const response = await getPosts();

    const { items: postsArray } = response;

    return (
        <>
            <div className={styles.postContainer}>
                <div>
                    <AboutComponent
                        title={"About"}
                        text={"Hallo this is about"}
                    />
                    <h1 className={styles.postsHeader}>Posts</h1>
                    <ul className={styles.postsWrapper}>
                        {postsArray.map((post: TypePost) => {
                            const {
                                sys,
                                fields: { title, category, slug },
                            } = post || {};

                            return (
                                <li className={styles.post} key={sys.id}>
                                    <Link href={`/${slug}`}>
                                        <h3>{title}</h3>
                                    </Link>
                                    {category && (
                                        <p>category: {category.fields.title}</p>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}
