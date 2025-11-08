import type { Entry, EntryFields } from "contentful";
import type { TypeCategoryFields } from "./TypeCategory";
import type { TypePostTypeFields } from "./TypePostType";

export interface TypePostFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    publishDate: EntryFields.Date;
    type?: Entry<TypePostTypeFields>[];
    body?: EntryFields.Text;
    category: Entry<TypeCategoryFields>;
    postRichText?: EntryFields.RichText;
    secondaryCategory?: Entry<TypeCategoryFields>;
}

export type TypePost = Entry<TypePostFields>;

export type responseTypePosts = {
    items: TypePost[];
};
