import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Footer from "../components/footer";
import Header from "../components/header";
import { client } from "../lib/contentful/client";
import Image from "next/image";
import { TypePost, responseType } from "../../../types/contentful/TypePost";
import { getPosts } from "../posts/page";

export default async function Slug({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const response: responseType = await getPosts();

    const { items } = response;

    const post: TypePost | undefined = items.find(
        (item) => item.fields.slug === slug
    );

    const { title, category, publishDate, body } = (post || {}).fields || {};

    return (
        <>
            <Header />
            <Link href="/">Home</Link>

            {title && <h3>{title}</h3>}
            {category?.fields.icon?.fields.file && (
                <Image
                    src={`https:${category.fields.icon.fields.file.url}`}
                    alt={"abc"}
                    width={100}
                    height={100}
                />
            )}

            {/* <p>created at: {item.sys.createdAt}</p> */}
            {publishDate && <p>published at: {publishDate}</p>}
            {category && <p>category: {category.fields.title}</p>}

            {body && <ReactMarkdown>{body}</ReactMarkdown>}
            <p>slug: {slug}</p>

            <Footer />
        </>
    );
}
