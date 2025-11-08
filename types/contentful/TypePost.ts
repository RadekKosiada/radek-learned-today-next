import type { Entry, EntryFields } from "contentful";
import type { TypeCategoryFields } from "./TypeCategory";
import type { TypePostTypeFields } from "./TypePostType";

export interface TypePostFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    publishDate: EntryFields.Date;
    type?: any[];
    body?: EntryFields.Text;
    category: any;
    postRichText?: EntryFields.RichText;
    secondaryCategory?: any;
}

export type TypePost = Entry<any>;

export type responseTypePosts = {
    items: TypePost[];
};
