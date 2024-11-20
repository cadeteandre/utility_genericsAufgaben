import { IBook } from "./level-1_1";

type TReadOnlyBook = Readonly<IBook>;

const readonlyBook: TReadOnlyBook = {
    author: 'Yuval Noah Harari',
    name: 'Sapiens: A Brief History of Humankind',
    publishingYear: '2015',
    shortDescription: 'One hundred thousand years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance? ',
    numberOfPages: 430
}
//!It doenst work! ⬇️
// readonlyBook.name = 'Andre';

interface IReadOnlyBook extends Readonly<IBook> {}

const readonlyBook2: IReadOnlyBook = {
    author: 'J. K. Rowling',
    name: "Harry Potter and the Philosopher's Stone",
    publishingYear: '1997',
    shortDescription: "A young wizard who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
    numberOfPages: 230
}
//!It doenst work! ⬇️
// readonlyBook2.name = 'Lucas';

console.log(readonlyBook);
console.log(readonlyBook2);
