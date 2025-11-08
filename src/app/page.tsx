import getAbout from "../api/getAbout";
import getCategories from "../api/getCategories";
import getPosts from "../api/getPosts";

import { TypeAboutFields } from "../../types/contentful/TypeAbout";
import { isEntryWithFields } from "../../utils";
import AllPosts from "./components/allPosts";
import Header from "./components/header";
import main from "./main.module.scss";

export default async function Home() {
    const responsePosts = await getPosts();
    const responseCategories = await getCategories();
    const responseAbout = await getAbout();

    const { items: postsArray } = responsePosts;
    const { items: categoriesArray } = responseCategories;
    const { items: aboutText } = responseAbout;

    const aboutBody = aboutText && aboutText.length && isEntryWithFields<TypeAboutFields>(aboutText[0])
        ? aboutText[0].fields.body
        : "";

    return (
        <div className={main.container}>
            <Header />
            <AllPosts
                postsArray={postsArray}
                categoriesArray={categoriesArray}
                aboutText={aboutBody}
            />
        </div>
    );
}
