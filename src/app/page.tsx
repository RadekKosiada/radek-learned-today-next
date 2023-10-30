import { responseTypeCategories } from "../../types/contentful/TypeCategory";
import { responseTypePosts } from "../../types/contentful/TypePost";
import Footer from "./components/footer";
import Header from "./components/header";
import { client } from "./lib/contentful/client";
import Posts from "./posts/page";

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

export default async function Home() {
    const responsePosts = await getPosts();
    const responseCategories = await getCategories();

    const { items: postsArray } = responsePosts;
    const { items: categoriesArray } = responseCategories;
    return (
        <>
            <Header isHome={true} />
            <Posts postsArray={postsArray} categoriesArray={categoriesArray} />
            <Footer />
        </>
    );
}
