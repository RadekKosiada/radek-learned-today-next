import { EntryFields } from "contentful";
import { TypePost } from "./types/contentful";

export const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
};

export function valueOfDate(num: EntryFields.Date) {
    return new Date(num).valueOf();
}

export const sortPosts = (
    postsArray: TypePost[],
    order: "descending" | "ascending"
) => {
    const sortedArray = [...postsArray].sort((a, b) => {
        const {
            fields: { publishDate: publishDateA },
        } = a;
        const {
            fields: { publishDate: publishDateB },
        } = b;

        if (!publishDateA && !publishDateB) return 0; // both have no publishDate
        if (!publishDateA) return 1; // a has no publishDate, so b comes first
        if (!publishDateB) return -1; // b has no publishDate, so a comes first

        if (order === "descending") {
            return valueOfDate(publishDateB) - valueOfDate(publishDateA);
        } else {
            return valueOfDate(publishDateA) - valueOfDate(publishDateB);
        }
    });

    return sortedArray;
};
