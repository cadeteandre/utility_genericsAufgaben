import { IBook } from './level-1_1';

type TBasicBook = Omit<IBook, 'publishingYear' | 'shortDescription'>;

const basicBook: TBasicBook = {
    author: "Michael Myers's son",
    name: 'The History of Michael Myers',
    numberOfPages: 300
}

interface IBasicBook extends TBasicBook {}

const basicBook2: IBasicBook = {
    author: "Leatherface's uncle",
    name: 'The History of Leatherface',
    numberOfPages: 190
}

console.log(basicBook);
console.log(basicBook2);
