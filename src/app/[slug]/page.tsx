import ReactMarkdown from "react-markdown";
import { TypeCategoryFields } from "../../../types/contentful/TypeCategory";
import {
    TypePost,
    TypePostFields,
    responseTypePosts,
} from "../../../types/contentful/TypePost";
import { formatDate } from "../../../utils";
import getPosts from "../../api/getPosts";
import Header from "../components/header";
import styles from "./slug.module.scss";

type Params = Promise<{ slug: string }>

export default async function Slug({ params }: { params: Params }) {
    const { slug } = await params;
    const response: responseTypePosts = await getPosts();

    const { items } = response;

    const post: TypePost | undefined = items.find(
        (item): item is TypePost =>
            'fields' in item &&
            item.fields &&
            'slug' in item.fields &&
            item.fields.slug === slug
    );

    const fields = post?.fields as TypePostFields | undefined;
    const { title, category, publishDate, body } = fields || {};
    const categoryFields = category?.fields as TypeCategoryFields | undefined;

    return (
        <>
            <Header />
            <>
                <div className={styles.postWrapper}>
                    {title && categoryFields?.title && (
                        <h3>
                            {categoryFields.title}: {title}
                        </h3>
                    )}
                    {/* {category?.fields.icon?.fields.file && (
                    <Image
                        src={`https:${category.fields.icon.fields.file.url}`}
                        alt={"abc"}
                        width={100}
                        height={100}
                    />
                )} */}

                    {body && <ReactMarkdown>{body}</ReactMarkdown>}
                </div>
                {publishDate && (
                    <p className={styles.date}>
                        published: {formatDate(publishDate)}
                    </p>
                )}
            </>
        </>
    );
}
