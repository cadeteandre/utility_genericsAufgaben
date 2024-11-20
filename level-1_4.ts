import { IBook } from "./level-1_1";

type TRequiredBook = Required<IBook>;

const requiredBook: TRequiredBook = {
    author: 'Yuval Noah Harari',
    name: 'Sapiens: A Brief History of Humankind',
    publishingYear: '2015',
    shortDescription: 'One hundred thousand years ago, at least six human species inhabited the earth. Today there is just one. Us. Homo sapiens. How did our species succeed in the battle for dominance? ',
    numberOfPages: 430
}

interface IRequiredBook extends Required<IBook> {}

const requiredBook2: IRequiredBook = {
    author: 'J. K. Rowling',
    name: "Harry Potter and the Philosopher's Stone",
    publishingYear: '1997',
    shortDescription: "A young wizard who discovers his magical heritage on his eleventh birthday when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry.",
    numberOfPages: 230
}

console.log(requiredBook);
console.log(requiredBook2);
