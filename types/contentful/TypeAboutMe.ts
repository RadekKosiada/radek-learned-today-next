import type { Entry, EntryFields } from "contentful";

export interface TypeAboutMeFields {
    body: EntryFields.Text;
}

export type TypeAboutMe = Entry<TypeAboutMeFields>;

export type responseTypeAboutMe = {
    items: TypeAboutMe[];
};
