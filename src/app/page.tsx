import { responseTypeCategories } from "../../types/contentful/TypeCategory";
import { responseTypePosts } from "../../types/contentful/TypePost";
import { responseTypeAbout } from "../../types/contentful/TypeAbout";
import { responseTypeAboutMe } from "../../types/contentful/TypeAboutMe";

import Header from "./components/header";
import { client } from "./lib/contentful/client";
import AllPosts from "./components/allPosts";
import main from "./main.module.scss";

// https://nextjs.org/docs/app/building-your-application/caching#request-memoization
export async function getPosts() {
    const response: responseTypePosts = await client.getEntries({
        content_type: "post",
    });
    return response;
}

export async function getCategories() {
    const response: responseTypeCategories = await client.getEntries({
        content_type: "category",
    });
    return response;
}

export async function getAbout() {
    const response: responseTypeAbout = await client.getEntries({
        content_type: "about",
    });
    return response;
}

export async function getAboutMe() {
    const response: responseTypeAboutMe = await client.getEntries({
        content_type: "aboutMe",
    });
    return response;
}

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
