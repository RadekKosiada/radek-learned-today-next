"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { TypePost } from "../../../types/contentful";
import { TypeCategory } from "../../../types/contentful/TypeCategory";
import { formatDate, sortPosts } from "../../../utils";
import AboutComponent from "../components/aboutComponent";
import CategoriesFilters from "../components/filtersCategory";
import styles from "./posts.module.scss";

export default function Posts({
    postsArray,
    categoriesArray,
}: {
    postsArray: TypePost[];
    categoriesArray: TypeCategory[];
}) {
    const [activeCategories, setActiveCategories] = useState(Array<string>);
    const [filterDateDescending, setFilterDateDescending] = useState(true);

    const [numOfShownPosts, setNumOfShownPosts] = useState(postsArray.length);
    const handleClick = (category: string) => {
        if (!activeCategories.includes(category)) {
            setActiveCategories([...activeCategories, category]);
        } else {
            const newActiveCategories = activeCategories.filter(
                (item) => item !== category
            );
            setActiveCategories(newActiveCategories);
        }
    };

    useEffect(() => {
        if (activeCategories.length) {
            const filteredPosts = postsArray.filter(
                (post) =>
                    post.fields.category &&
                    post.fields.category.fields.title &&
                    activeCategories.includes(post.fields.category.fields.title)
            );
            setNumOfShownPosts(filteredPosts.length);
        } else {
            setNumOfShownPosts(postsArray.length);
        }
    }, [postsArray, activeCategories]);

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
            <>
                <AboutComponent title={"About"} text={"Hallo this is about"} />
                <h1 className={styles.postsHeader}>Posts</h1>
                <p>
                    You currently see{" "}
                    {numOfShownPosts === postsArray.length
                        ? "all"
                        : numOfShownPosts}{" "}
                    of {postsArray.length}
                    {" available "}
                    posts
                </p>

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
                            fields: {
                                title: postTitle,
                                category,
                                slug,
                                publishDate,
                            },
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
            </>
        </div>
    );
}
