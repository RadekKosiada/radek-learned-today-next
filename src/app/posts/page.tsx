import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";

import styles from "./posts.module.css";

import { client } from "../lib/contentful/client";

export default async function Posts() {
    const response = await client.getEntries({ content_type: "post" });

    console.log("test: ", response.items[0]);
    const postItems = response.items;
    return (
        <>
            <Header />
            <Link href="/">Home</Link>
            <h1>Posts</h1>
            {postItems.map((item: any) => {
                return (
                    <div className={styles.post} key={item.sys.id}>
                        <p>created at: {item.sys.createdAt}</p>
                        <p>{item.fields.title}</p>
                        <p>{item.fields.body}</p>
                    </div>
                );
            })}
            <Footer />
        </>
    );
}

// export const getStaticProps = async () => {

// };
