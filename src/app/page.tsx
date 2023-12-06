import { responseTypeCategories } from "../../types/contentful/TypeCategory";
import { responseTypePosts } from "../../types/contentful/TypePost";
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
    // to adjust type asap
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const response: any = await client.getEntries({
        content_type: "about",
    });
    return response;
}

export async function getAboutMe() {
    // to adjust type asap
    /* eslint-disable  @typescript-eslint/no-explicit-any */
    const response: any = await client.getEntries({
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
