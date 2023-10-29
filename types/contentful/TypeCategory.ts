import type { Asset, Entry, EntryFields } from "contentful";

export interface TypeCategoryFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    icon?: Asset;
}

export type TypeCategory = Entry<TypeCategoryFields>;

export type responseTypeCategories = {
    items: TypeCategory[];
};
