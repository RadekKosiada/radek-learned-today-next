import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCategoryFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    icon?: Asset;
}

export type TypeCategory = Entry<any>;

export type responseTypeCategories = {
    items: TypeCategory[];
};
