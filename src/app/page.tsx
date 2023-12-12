import getPosts from "../api/getPosts";
import getCategories from "../api/getCategories";
import getAbout from "../api/getAbout";

import Header from "./components/header";
import AllPosts from "./components/allPosts";
import main from "./main.module.scss";

export default async function Home() {
    const responsePosts = await getPosts();
    const responseCategories = await getCategories();
    const responseAbout = await getAbout();

    const { items: postsArray } = responsePosts;
    const { items: categoriesArray } = responseCategories;
    const { items: aboutText } = responseAbout;

    return (
        <div className={main.container}>
            <Header />
            <AllPosts
                postsArray={postsArray}
                categoriesArray={categoriesArray}
                aboutText={aboutText[0].fields.body}
            />
        </div>
    );
}
