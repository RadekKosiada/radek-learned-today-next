"use client";

import { TypeCategory } from "../../../types/contentful/TypeCategory";

import { useState } from "react";
import styles from "./filtersCategory.module.css";

export default function CategoriesFilters({
    categoriesArray,
}: {
    categoriesArray: TypeCategory[];
}) {
    const [activeCategories, setActiveCategories] = useState([""]);

    const handleClick = (category: string) => {
        console.log("CAT: ", category);
        // check if already
        // if yes, delete, if no add
        setActiveCategories([...activeCategories, category]);
    };

    console.log("AC: ", activeCategories);

    return (
        <>
            <h4>Filters: </h4>
            <ul className={styles.categoriesWrapper}>
                {categoriesArray.map((category: TypeCategory) => {
                    const {
                        sys,
                        fields: { title },
                    } = category || {};
                    return (
                        <li
                            onClick={() =>
                                title && handleClick(title)
                            }
                            className={styles.categoryFilter}
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
