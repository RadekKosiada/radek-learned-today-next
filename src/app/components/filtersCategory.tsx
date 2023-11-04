"use client";

import { TypeCategory } from "../../../types/contentful/TypeCategory";

import styles from "./filtersCategory.module.css";

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
            <h4>Filters: </h4>
            <button className={styles.categoryFilter}
                onClick={handleCancelClick}>Cancel</button>
            <ul className={styles.categoriesWrapper}>
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
