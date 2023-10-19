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
    const postItems = response.items;

    return (
        <>
            <Header />
            <Link href="/">Home</Link>
            <h1>Posts</h1>
            {postItems.map((item: any) => {
                return (
                    <div className={styles.post} key={item.sys.id}>
                        <h3>{item.fields.title}</h3>
                        <Image
                            src={`https:${item.fields.category.fields.icon.fields.file.url}`}
                            alt={"abc"}
                            width={100}
                            height={100}
                        />
                        {/* <p>created at: {item.sys.createdAt}</p> */}
                        <p>published at: {item.fields.publishDate}</p>
                        <p>category: {item.fields.category.fields.title}</p>
                        <ReactMarkdown>{item.fields.body}</ReactMarkdown>
                        <p>slug: {item.fields.slug}</p>
                    </div>
                );
            })}
            <Footer />
        </>
    );
}
