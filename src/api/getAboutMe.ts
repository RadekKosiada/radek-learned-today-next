import { client } from "../lib/contentful/client";
import { responseTypeAboutMe } from "../../types/contentful/TypeAboutMe";

async function getAboutMe() {
    const response: responseTypeAboutMe = await client.getEntries({
        content_type: "aboutMe",
    });
    return response;
}

export default getAboutMe;
