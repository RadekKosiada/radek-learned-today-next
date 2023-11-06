"use client";

import Link from "next/link";
import { useState } from "react";
import { TypePost } from "../../../types/contentful";
import { TypeCategory } from "../../../types/contentful/TypeCategory";
import { dateOptions, sortPosts } from "../../../utils";
import AboutComponent from "../components/about";
import CategoriesFilters from "../components/filtersCategory";
import styles from "./posts.module.css";

export default function Posts({
    postsArray,
    categoriesArray,
}: {
    postsArray: TypePost[];
    categoriesArray: TypeCategory[];
}) {
    const [activeCategories, setActiveCategories] = useState(Array<string>);
    const [filterDateDescending, setFilterDateDescending] = useState(true);

    const handleClick = (category: string) => {
        if (!activeCategories.includes(category)) {
            setActiveCategories([...activeCategories, category]);

            categoriesArray.map((item) => {
                if (item.fields.title === category) {
                }
            });
        } else {
            const newActiveCategories = activeCategories.filter(
                (item) => item !== category
            );
            setActiveCategories(newActiveCategories);
        }
    };

    const handleCancelClick = () => {
        setActiveCategories([]);
    };

    const handleFilterDate = () => {
        setFilterDateDescending(!filterDateDescending);
    };

    const sortedPosts = filterDateDescending
        ? sortPosts(postsArray, "descending")
        : sortPosts(postsArray, "ascending");

    const dateFilterButtonText = filterDateDescending
        ? "From the oldest ⇧"
        : "From the newest ⇩";

    return (
        <div className={styles.postContainer}>
            <div>
                <AboutComponent title={"About"} text={"Hallo this is about"} />
                <h1 className={styles.postsHeader}>Posts</h1>

                <CategoriesFilters
                    categoriesArray={categoriesArray}
                    handleClick={handleClick}
                    handleCancelClick={handleCancelClick}
                    activeCategories={activeCategories}
                />

                <h4>Filter posts according to date:</h4>
                <button
                    className={styles.categoryFilter}
                    onClick={handleFilterDate}
                >
                    {dateFilterButtonText}
                </button>

                <ul className={styles.postsWrapper}>
                    {sortedPosts.map((post: TypePost) => {
                        const {
                            sys,
                            fields: { title, category, slug, publishDate },
                        } = post || {};

                        const { title: postTitle } = category?.fields || {};

                        const showPost =
                            category &&
                            postTitle &&
                            (!activeCategories.length ||
                                activeCategories.includes(postTitle));

                        const publishDateFormatted = publishDate
                            ? new Date(publishDate).toLocaleDateString(
                                  "en-EN",
                                  dateOptions
                              )
                            : "";
                        return (
                            <>
                                {showPost && (
                                    <li className={styles.post} key={sys.id}>
                                        <Link href={`/${slug}`}>
                                            <h3>{title}</h3>
                                        </Link>
                                        {category && (
                                            <p>
                                                category:{" "}
                                                {category.fields.title}
                                            </p>
                                        )}
                                        <p>
                                            published: {publishDateFormatted}{" "}
                                        </p>
                                    </li>
                                )}
                            </>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
