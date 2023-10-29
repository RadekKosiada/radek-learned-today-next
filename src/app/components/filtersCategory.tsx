import { client } from "../lib/contentful/client";

import {
    responseTypeCategories,
    TypeCategory,
} from "../../../types/contentful/TypeCategory";

import styles from "./filtersCategory.module.css";

export async function getCategories() {
    const response: responseTypeCategories = await client.getEntries({
        content_type: "category",
    });
    return response;
}

export default async function CategoriesFilters() {
    const responseCategories = await getCategories();

    const { items: categoriesArray } = responseCategories;

    return (
        <>
            <h4>Filters: </h4>
            <ul className={styles.categoriesWrapper}>
                {categoriesArray.map((category: TypeCategory) => {
                    const {
                        sys,
                        fields: { title, icon },
                    } = category || {};
                    return <li key={sys.id}>{title}</li>;
                })}
            </ul>
        </>
    );
}
