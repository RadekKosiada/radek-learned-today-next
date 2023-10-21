import type { Entry, EntryFields } from "contentful";

export interface TypePageFields {
    title?: EntryFields.Symbol;
    slug?: EntryFields.Symbol;
    body?: EntryFields.Text;
}

export type TypePage = Entry<TypePageFields>;
