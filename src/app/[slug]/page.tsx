import Link from "next/link";
import ReactMarkdown from "react-markdown";
import Footer from "../components/footer";
import Header from "../components/header";
import { client } from "../lib/contentful/client";
import Image from "next/image";

export default async function Slug({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const response = await client.getEntries({
        content_type: "post",
        "fields.slug": slug,
    });

    const { items } = response;

    const {
        fields: { title, category, publishDate, body },
    } = items[0];

    return (
        <>
            <Header />
            <Link href="/">Home</Link>

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
            {category && <p>category: {category.fields.title}</p>}

            <ReactMarkdown>{body}</ReactMarkdown>
            <p>slug: {slug}</p>

            <Footer />
        </>
    );
}
