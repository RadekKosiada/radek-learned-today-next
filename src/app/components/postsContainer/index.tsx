"use client";

import Link from "next/link";

import { TypePost } from "../../../../types/contentful";
import { formatDate } from "../../../../utils";
import styles from "./postsContainer.module.scss";

export default function PostsContainer({
    sortedPosts,
    activeCategories,
}: {
    sortedPosts: TypePost[];
    activeCategories: string[];
}) {
    return (
        <ul className={styles.postsWrapper}>
            {sortedPosts.map((post: TypePost) => {
                const {
                    sys,
                    fields: { title: postTitle, category, slug, publishDate, secondaryCategory },
                } = post || {};

                const { title: postCategory } = category?.fields || {};
                const { title: secondaryPostCategory } = secondaryCategory?.fields || {};

                const showPost =
                    category &&
                    postCategory &&
                    (!activeCategories.length ||
                        activeCategories.includes(postCategory));

                const publishDateFormatted = publishDate
                    ? formatDate(publishDate)
                    : "";
                return (
                    showPost && (
                        <li className={styles.post} key={sys.id}>
                            <Link href={`/${slug}`}>
                                <h3>
                                    {`${postCategory}`}{secondaryPostCategory ? ` + ${secondaryPostCategory}` : ''}: {postTitle}
                                </h3>
                            </Link>
                            <p>published: {publishDateFormatted} </p>
                        </li>
                    )
                );
            })}
        </ul>
    );
}
