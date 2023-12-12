import { client } from "../lib/contentful/client";
import { responseTypeAbout } from "../../types/contentful/TypeAbout";

async function getAbout() {
    const response: responseTypeAbout = await client.getEntries({
        content_type: "about",
    });
    return response;
}

export default getAbout;
