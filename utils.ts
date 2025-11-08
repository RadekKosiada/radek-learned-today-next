import { EntryFields } from "contentful";
import { TypePost } from "./types/contentful";

export const dateOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
};

export const formatDate = (
    date: `${number}-${number}-${number}T${number}:${number}:${number}Z`
) => {
    return new Date(date).toLocaleDateString("en-EN", dateOptions);
};

export function valueOfDate(num: EntryFields.Date) {
    return new Date(num).valueOf();
}

export const sortPosts = (
    postsArray: TypePost[],
    order: "descending" | "ascending"
) => {
    const sortedArray = [...postsArray].sort((a, b) => {
        const publishDateA = (a as any)?.fields?.publishDate;
        const publishDateB = (b as any)?.fields?.publishDate;

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

// Generic type-guard: checks that the value is a contentful Entry with `fields`
export function isEntryWithFields<T>(x: any): x is { fields: T } {
    return !!x && typeof x === "object" && "fields" in x && x.fields != null;
}
