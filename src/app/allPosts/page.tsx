"use client";

import { useEffect, useState } from "react";
import { TypePost } from "../../../types/contentful";
import { TypeCategory } from "../../../types/contentful/TypeCategory";
import { sortPosts } from "../../../utils";
import AboutComponent from "../components/aboutComponent";
import styles from "./posts.module.scss";
import PostsContainer from "../components/postsContainer";
import Filters from "../components/filters";

export default function AllPosts({
    postsArray,
    categoriesArray,
    aboutText,
}: {
    postsArray: TypePost[];
    categoriesArray: TypeCategory[];
    aboutText: string;
}) {
    const [activeCategories, setActiveCategories] = useState(Array<string>);
    const [filterDateDescending, setFilterDateDescending] = useState(true);
    const [numOfShownPosts, setNumOfShownPosts] = useState(postsArray.length);
    const [sortedPosts, setSortedPosts] = useState(Array<TypePost>);
    const [dateFilterButtonText, setDateFilterButtonText] =
        useState("From the oldest ⇧");
    const [headingText, setHeadingText] = useState("All Posts");

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

    useEffect(() => {
        if (numOfShownPosts === postsArray.length) {
            setHeadingText("All Posts");
        } else {
            setHeadingText("Posts");
        }
    }, [numOfShownPosts, postsArray.length]);

    return (
        <div className={styles.container}>
            <>
                <AboutComponent title={"About"} text={aboutText} />

                <div className={styles.postsHeadingWrapper}>
                    <h1 className={styles.postsHeading}>{headingText} </h1>
                    <h5 className={styles.numOfShownPosts}>
                        {" "}
                        {numOfShownPosts}
                        {numOfShownPosts === postsArray.length
                            ? ""
                            : `/${postsArray.length}`}
                    </h5>
                </div>

                <Filters
                    categoriesArray={categoriesArray}
                    handleClick={handleClick}
                    handleCancelClick={handleCancelClick}
                    handleFilterDate={handleFilterDate}
                    activeCategories={activeCategories}
                    dateFilterButtonText={dateFilterButtonText}
                />

                <PostsContainer
                    sortedPosts={sortedPosts}
                    activeCategories={activeCategories}
                />
            </>
        </div>
    );
}
