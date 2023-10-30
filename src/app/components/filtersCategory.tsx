"use client";

import { TypeCategory } from "../../../types/contentful/TypeCategory";

import { useState } from "react";
import styles from "./filtersCategory.module.css";

export default function CategoriesFilters({
    categoriesArray,
}: {
    categoriesArray: TypeCategory[];
}) {
    const [activeCategories, setActiveCategories] = useState(Array<string>);

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

    console.log(categoriesArray);

    return (
        <>
            <h4>Filters: </h4>
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
