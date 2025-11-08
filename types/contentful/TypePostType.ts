import type { Entry, EntryFields } from "contentful";

export interface TypePostTypeFields {
    name: EntryFields.Symbol;
}

export type TypePostType = Entry<TypePostTypeFields>;
