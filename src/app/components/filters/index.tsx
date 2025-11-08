"use client";

import { TypeCategory, TypeCategoryFields } from "../../../../types/contentful/TypeCategory";
import { isEntryWithFields } from "../../../../utils";

import styles from "./filters.module.scss";

export default function Filters({
    hideFilter,
    categoriesArray,
    handleClick,
    handleCancelClick,
    handleFilterDate,
    activeCategories,
    dateFilterButtonText,
}: {
    hideFilter: boolean;
    categoriesArray: TypeCategory[];
    handleClick: (category: string) => void;
    handleCancelClick: () => void;
    handleFilterDate: () => void;
    activeCategories: Array<string>;
    dateFilterButtonText: string;
}) {
    return (
        <>
            {!hideFilter && (
                <div className={styles.container}>
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
                            const sys = category.sys;
                            const title = isEntryWithFields<TypeCategoryFields>(category)
                                ? (category.fields as TypeCategoryFields).title
                                : undefined;

                            const isFilterActive =
                                typeof title === "string" &&
                                activeCategories.includes(title);
                            const categoryClassName = [
                                styles.categoryFilter,
                                isFilterActive ? styles.filterIsActive : "",
                            ].join(" ");

                            return (
                                <li
                                    onClick={() => typeof title === "string" && handleClick(title)}
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
                </div>
            )}
        </>
    );
}
