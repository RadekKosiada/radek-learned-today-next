import Image from "next/image";
import ReactMarkdown from "react-markdown";
import {
    TypePost,
    responseTypePosts,
} from "../../../types/contentful/TypePost";
import Footer from "../components/footer";
import Header from "../components/header";
import { getPosts } from "../page";

export default async function Slug({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const response: responseTypePosts = await getPosts();

    const { items } = response;

    const post: TypePost | undefined = items.find(
        (item) => item.fields.slug === slug
    );

    const { title, category, publishDate, body } = (post || {}).fields || {};

    return (
        <>
            <Header />
            {title && <h3>{title}</h3>}
            {category?.fields.icon?.fields.file && (
                <Image
                    src={`https:${category.fields.icon.fields.file.url}`}
                    alt={"abc"}
                    width={100}
                    height={100}
                />
            )}
            {publishDate && <p>published at: {publishDate}</p>}
            {category && <p>category: {category.fields.title}</p>}

            {body && <ReactMarkdown>{body}</ReactMarkdown>}
            <p>slug: {slug}</p>

            <Footer />
        </>
    );
}
