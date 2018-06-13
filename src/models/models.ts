export interface IValueStream {
    id?: number;
    title: string;
    description: string;
}

export enum FormMode {
    None,
    CreateNew,
    Edit
}

export interface IAuthor{
    id: string;
    title: string;
    firstName: string;
}