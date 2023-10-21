import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Footer from "../components/footer";
import Header from "../components/header";

import styles from "./posts.module.css";

import { client } from "../lib/contentful/client";

import Image from "next/image";

export default async function Posts() {
    const response = await client.getEntries({ content_type: "post" });

    console.log("test: ", response.items[0].fields.body);
    const { items: postsArray } = response;

    return (
        <>
            <Header />
            <Link href="/">Home</Link>
            <h1>Posts</h1>
            {postsArray.map((post: "post") => {
                return (
                    <div className={styles.post} key={post.sys.id}>
                        <h3>{post.fields.title}</h3>
                        <Image
                            src={`https:${post.fields.category.fields.icon.fields.file.url}`}
                            alt={"abc"}
                            width={100}
                            height={100}
                        />
                        {/* <p>created at: {item.sys.createdAt}</p> */}
                        <p>published at: {post.fields.publishDate}</p>
                        <p>category: {post.fields.category.fields.title}</p>
                        <ReactMarkdown>{post.fields.body}</ReactMarkdown>
                        <p>slug: {post.fields.slug}</p>
                    </div>
                );
            })}
            <Footer />
        </>
    );
}
