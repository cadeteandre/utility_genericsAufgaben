interface IDonkey {
    name: string,
    age: number,
    fluffyness: number,
    favoriteFood: string
}

enum Donkey {
    Daisy,
    Gus,
    Rosie,
    Coco,
    Jasper
}

type TRecordDonkey = Record<Donkey, IDonkey>;

const recordDonkey: TRecordDonkey = {
    0: {name: 'Daisy', age: 6, fluffyness: 1000, favoriteFood: 'Banana'},
    1: {name: 'Gus', age: 7, fluffyness: 30, favoriteFood: 'Banana'},
    2: {name: 'Rosie', age: 9, fluffyness: 200, favoriteFood: 'Banana'},
    3: {name: 'Coco', age: 10, fluffyness: 800, favoriteFood: 'Banana'},
    4: {name: 'Jasper', age: 13, fluffyness: 0, favoriteFood: 'Banana'}
}

console.log(recordDonkey);
