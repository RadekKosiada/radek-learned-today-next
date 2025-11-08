import type { Entry, EntryFields } from "contentful";

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
