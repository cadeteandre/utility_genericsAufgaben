export interface IBook {
    author: string
    name: string
    publishingYear: string
    shortDescription?: string
    numberOfPages: number
}

//* ----------------------- Partial Book -----------------------
export type TPartialIBook = Partial<IBook>;

const partialIBook: TPartialIBook = {
    author: 'Freddy Krüger History',
    name: "Freddy Krüger's son"
}

export interface IPartialIBook extends Partial<IBook> {};

const partialIBook2: IPartialIBook = {
    name: "Jason's son"
}

console.log(partialIBook);
console.log(partialIBook2);
