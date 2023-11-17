"use client";

import { TypeCategory } from "../../../../types/contentful/TypeCategory";

import styles from "./filtersCategory.module.scss";

export default function CategoriesFilters({
    categoriesArray,
    handleClick,
    handleCancelClick,
    activeCategories,
}: {
    categoriesArray: TypeCategory[];
    handleClick: (category: string) => void;
    handleCancelClick: () => void;
    activeCategories: Array<string>;
}) {
    return (
        <>
            <h4>Filter posts according to category:</h4>
            <ul className={styles.categoriesWrapper}>
                <button
                    disabled={!activeCategories.length}
                    className={
                        activeCategories.length ? styles.categoryFilter : ""
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
        </>
    );
}
