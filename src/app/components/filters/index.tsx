"use client";

import { useState } from "react";
import { TypeCategory } from "../../../../types/contentful/TypeCategory";

import styles from "./filters.module.scss";

export default function Filters({
    categoriesArray,
    handleClick,
    handleCancelClick,
    handleFilterDate,
    activeCategories,
    dateFilterButtonText,
}: {
    categoriesArray: TypeCategory[];
    handleClick: (category: string) => void;
    handleCancelClick: () => void;
    handleFilterDate: () => void;
    activeCategories: Array<string>;
    dateFilterButtonText: string;
}) {
    const [hideFilter, setHideFilter] = useState(true);
    const [showFilterButtonText, setShowFilterButtonText] = useState("Show");

    const handleShowCategoryFilters = () => {
        setHideFilter(!hideFilter);
        setShowFilterButtonText(hideFilter ? "Hide" : "Show");
    };
    return (
        <div className={styles.container}>
            <button onClick={handleShowCategoryFilters}>
                {showFilterButtonText} filters
            </button>
            {!hideFilter && (
                <>
                    <h4>Filter posts according to category</h4>

                    <ul className={styles.categoriesWrapper}>
                        <button
                            disabled={!activeCategories.length}
                            className={
                                activeCategories.length
                                    ? styles.categoryFilter
                                    : ""
                            }
                            onClick={handleCancelClick}
                        >
                            Cancel
                        </button>
                        {categoriesArray.map((category: TypeCategory) => {
                            const {
                                sys,
                                fields: { title },
                            } = category || {};

                            const isFilterActive =
                                title && activeCategories.includes(title);
                            const categoryClassName = [
                                styles.categoryFilter,
                                isFilterActive ? styles.filterIsActive : "",
                            ].join(" ");

                            return (
                                <li
                                    onClick={() => title && handleClick(title)}
                                    className={categoryClassName}
                                    key={sys.id}
                                >
                                    {title}
                                </li>
                            );
                        })}
                    </ul>
                    <h4>Filter posts according to date:</h4>
                    <button
                        className={styles.categoryFilter}
                        onClick={handleFilterDate}
                    >
                        {dateFilterButtonText}
                    </button>
                </>
            )}
        </div>
    );
}
