"use client";

import Link from "next/link";

import styles from "./postsContainer.module.scss";
import { TypePost } from "../../../../types/contentful";
import { formatDate } from "../../../../utils";

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
                    fields: { title: postTitle, category, slug, publishDate },
                } = post || {};

                const { title: postCategory } = category?.fields || {};

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
                                    {postCategory}: {postTitle}
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
