"use client";

import { useEffect, useState } from "react";
import { TypePost } from "../../../types/contentful";
import { TypeCategory } from "../../../types/contentful/TypeCategory";
import { sortPosts } from "../../../utils";
import AboutComponent from "../components/aboutComponent";
import CategoriesFilters from "../components/filtersCategory";
import styles from "./posts.module.scss";
import PostsContainer from "../components/postsContainer";

export default function AllPosts({
    postsArray,
    categoriesArray,
}: {
    postsArray: TypePost[];
    categoriesArray: TypeCategory[];
}) {
    const [activeCategories, setActiveCategories] = useState(Array<string>);
    const [filterDateDescending, setFilterDateDescending] = useState(true);
    const [numOfShownPosts, setNumOfShownPosts] = useState(postsArray.length);
    const [sortedPosts, setSortedPosts] = useState(Array<TypePost>);
    const [dateFilterButtonText, setDateFilterButtonText] =
        useState("From the oldest ⇧");

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

    useEffect(() => {
        const sortedAccordingToDate = filterDateDescending
            ? sortPosts(postsArray, "descending")
            : sortPosts(postsArray, "ascending");

        const buttonText = filterDateDescending
            ? "From the oldest ⇧"
            : "From the newest ⇩";

        setSortedPosts(sortedAccordingToDate);
        setDateFilterButtonText(buttonText);
    }, [filterDateDescending]);

    return (
        <div className={styles.container}>
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

                <PostsContainer
                    sortedPosts={sortedPosts}
                    activeCategories={activeCategories}
                />
            </>
        </div>
    );
}
