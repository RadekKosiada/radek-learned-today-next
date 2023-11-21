"use client";

import { useEffect, useState } from "react";
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

    const [toggleClass, setToggleClass] = useState(styles.toggle);
    const [toggleContainerClass, setToggleContainerClass] = useState(
        styles.toggleContainer
    );

    const handleShowCategoryFilters = () => {
        setHideFilter(!hideFilter);
    };

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
            <div className={styles.toggleFilterContainer}>
                <h4>Filters:</h4>
                <div
                    className={toggleContainerClass}
                    onClick={handleShowCategoryFilters}
                >
                    <div className={toggleClass}></div>
                </div>
            </div>
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
