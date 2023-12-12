import { client } from "../lib/contentful/client";
import { responseTypeCategories } from "../../types/contentful/TypeCategory";

async function getCategories() {
    const response: responseTypeCategories = await client.getEntries({
        content_type: "category",
    });
    return response;
}

export default getCategories;
