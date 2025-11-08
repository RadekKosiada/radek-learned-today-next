import type { Entry, EntryFields } from "contentful";

export interface TypeAboutFields {
    shortText?: EntryFields.Symbol;
    body: EntryFields.Text;
}

export type TypeAbout = Entry<any>;

export type responseTypeAbout = {
    items: TypeAbout[];
};
