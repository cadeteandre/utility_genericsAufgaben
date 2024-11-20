import { IBook } from "./level-1_1";

type TBookDescription = Pick<IBook, 'name' | 'shortDescription'>;

const bookDescription: TBookDescription = {
    name: 'The great people',
    shortDescription: 'Nice people get together to do nice things'
}

interface IBookDescription extends Pick<IBook, 'name' | 'shortDescription'> {}

const bookDescription2: IBookDescription = {
    name: 'Origin of Species',
    shortDescription: 'Natural selection occurs because infinite growth in an area is not possible due to limited resources (food, water, shelter, etc.).'
}

console.log(bookDescription);
console.log(bookDescription2);
