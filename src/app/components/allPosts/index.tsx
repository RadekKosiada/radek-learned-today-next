"use client";

import { useEffect, useState } from "react";
import { TypePost } from "../../../../types/contentful";
import { TypeCategory } from "../../../../types/contentful/TypeCategory";
import { sortPosts } from "../../../../utils";
import AboutComponent from "../aboutComponent";
import Filters from "../filters";
import PostsContainer from "../postsContainer";
import styles from "./posts.module.scss";

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
    const [numOfShownPosts, setNumOfShownPosts] = useState(
        postsArray.length || 0
    );
    const [sortedPosts, setSortedPosts] = useState(Array<TypePost>);
    const [dateFilterButtonText, setDateFilterButtonText] =
        useState("From the oldest ⇧");
    const [headingText, setHeadingText] = useState("All Posts");

    const [hideAbout, setHideAbout] = useState(true);
    const [aboutTextEdited, setAboutTextEdited] = useState(
        aboutText.split(".")[0] + "..."
    );

    const [toggleClass, setToggleClass] = useState(styles.toggle);
    const [toggleContainerClass, setToggleContainerClass] = useState(
        styles.toggleContainer
    );

    const [hideFilter, setHideFilter] = useState(true);

    const handleShowCategoryFilters = () => {
        setHideFilter(!hideFilter);
    };

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
        if (activeCategories && activeCategories.length) {
            const filteredPosts = postsArray.filter(
                (post) =>
                    post.fields.category &&
                    post.fields.category.fields.title &&
                    activeCategories.includes(post.fields.category.fields.title) || (post.fields.secondaryCategory && post.fields.secondaryCategory.fields.title &&
                        activeCategories.includes(post.fields.secondaryCategory.fields.title))
            );
            setNumOfShownPosts((filteredPosts && filteredPosts.length) || 0);
        } else {
            if (postsArray && postsArray.length) {
                setNumOfShownPosts(postsArray.length);
            }
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
    }, [filterDateDescending, postsArray]);

    useEffect(() => {
        if (
            postsArray &&
            postsArray.length &&
            numOfShownPosts === postsArray.length
        ) {
            setHeadingText("All Posts");
        } else {
            setHeadingText("Posts");
        }
    }, [numOfShownPosts, postsArray, postsArray.length]);

    const handleShowMoreAbout = () => {
        setHideAbout(!hideAbout);
    };

    useEffect(() => {
        if (!hideAbout) {
            setAboutTextEdited(aboutText);
        } else {
            setAboutTextEdited(aboutText.split(".")[0] + "...");
        }
    }, [hideAbout, aboutText]);

    useEffect(() => {
        setToggleClass(
            hideFilter
                ? styles.toggle
                : [styles.toggle, styles.toggleActive].join(" ")
        );

        setToggleContainerClass(
            hideFilter
                ? styles.toggleContainer
                : [styles.toggleContainer, styles.toggleContainerActive].join(
                    " "
                )
        );
    }, [hideFilter]);

    return (
        <div className={styles.container}>
            <>
                <AboutComponent
                    title="About"
                    text={aboutTextEdited}
                    handleShowMoreAbout={handleShowMoreAbout}
                    hideAbout={hideAbout}
                />

                <div className={styles.postsHeadingWrapper}>
                    <div>
                        <h1 className={styles.postsHeading}>
                            {headingText}{" "}
                            <span className={styles.numOfShownPosts}>
                                {" "}
                                {numOfShownPosts}
                                {postsArray &&
                                    postsArray.length &&
                                    numOfShownPosts === postsArray.length
                                    ? ""
                                    : `/${postsArray.length}`}
                            </span>
                        </h1>
                    </div>
                    <div
                        className={toggleContainerClass}
                        onClick={handleShowCategoryFilters}
                    >
                        <div className={toggleClass}></div>
                    </div>
                </div>

                <Filters
                    hideFilter={hideFilter}
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
