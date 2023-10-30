import Link from "next/link";

import { TypePost } from "../../../types/contentful";
import { TypeCategory } from "../../../types/contentful/TypeCategory";
import AboutComponent from "../components/about";
import CategoriesFilters from "../components/filtersCategory";
import styles from "./posts.module.css";

export default async function Posts({
    postsArray,
    categoriesArray,
}: {
    postsArray: TypePost[];
    categoriesArray: TypeCategory[];
}) {
    return (
        <div className={styles.postContainer}>
            <div>
                <AboutComponent title={"About"} text={"Hallo this is about"} />
                <h1 className={styles.postsHeader}>Posts</h1>

                <CategoriesFilters categoriesArray={categoriesArray} />

                <ul className={styles.postsWrapper}>
                    {postsArray.map((post: TypePost) => {
                        const {
                            sys,
                            fields: { title, category, slug },
                        } = post || {};

                        return (
                            <li className={styles.post} key={sys.id}>
                                <Link href={`/${slug}`}>
                                    <h3>{title}</h3>
                                </Link>
                                {category && (
                                    <p>category: {category.fields.title}</p>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
