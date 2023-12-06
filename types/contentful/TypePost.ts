import type { Entry, EntryFields } from "contentful";
import type { TypeCategoryFields } from "./TypeCategory";

export interface TypePostFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    publishDate: EntryFields.Date;
    body?: EntryFields.Text;
    category: Entry<TypeCategoryFields>;
    postRichText?: EntryFields.RichText;
}

export type TypePost = Entry<TypePostFields>;

export type responseTypePosts = {
    items: TypePost[];
};
