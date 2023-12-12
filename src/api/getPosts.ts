import { client } from "../lib/contentful/client";
import { responseTypePosts } from "../../types/contentful/TypePost";

// https://nextjs.org/docs/app/building-your-application/caching#request-memoization
async function getPosts() {
    const response: responseTypePosts = await client.getEntries({
        content_type: "post",
    });
    return response;
}

export default getPosts;
