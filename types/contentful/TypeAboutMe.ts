import type { Entry, EntryFields } from "contentful";

export interface TypeAboutMeFields {
    body: EntryFields.Text;
}

export type TypeAboutMe = Entry<any>;

export type responseTypeAboutMe = {
    items: TypeAboutMe[];
};
