import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Footer from "../components/footer";
import Header from "../components/header";

import styles from "./posts.module.css";

import { client } from "../lib/contentful/client";

import Image from "next/image";
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
                    fields: { title, category, publishDate, body, slug },
                } = post || {};

                return (
                    <div className={styles.post} key={sys.id}>
                        <h3>{title}</h3>
                        {category?.fields.icon?.fields.file && (
                            <Image
                                src={`https:${category.fields.icon.fields.file.url}`}
                                alt={"abc"}
                                width={100}
                                height={100}
                            />
                        )}

                        {/* <p>created at: {item.sys.createdAt}</p> */}
                        <p>published at: {publishDate}</p>
                        {category && (
                            <p>category: {category.fields.title}</p>
                        )}

                        <ReactMarkdown>{body}</ReactMarkdown>
                        <p>slug: {slug}</p>
                    </div>
                );
            })}
            <Footer />
        </>
    );
}
