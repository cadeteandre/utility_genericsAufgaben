interface ISmoothie {
    name: string,
    ingredients: string[],
    size: ISmoothieSize,
    price: number
}

enum ISmoothieSize {
    small,
    medium,
    large,
    XL
}

function customizeSmoothie(
    basicSmoothie: ISmoothie, 
    customizeSmoothie: Partial<ISmoothie>
    ): ISmoothie {
        // const newSmoothie: ISmoothie = {
        //     name: customizeSmoothie.name ? customizeSmoothie.name : basicSmoothie.name,
        //     ingredients: customizeSmoothie.ingredients && customizeSmoothie.ingredients?.length !== 0 ? customizeSmoothie.ingredients : basicSmoothie.ingredients,
        //     size: customizeSmoothie.size ? customizeSmoothie.size : basicSmoothie.size,
        //     price: customizeSmoothie.price ? customizeSmoothie.price : basicSmoothie.price
        // }
        // return newSmoothie;
        return {...basicSmoothie, ...customizeSmoothie};
}

const basicSmoothie: ISmoothie = {
    name: "Berry Delight",
    ingredients: ["strawberries", "blueberries", "yogurt"],
    size: ISmoothieSize.medium,
    price: 5.99,
};

const customizedSmoothie1: Partial<ISmoothie> = {
    size: ISmoothieSize.large,
    ingredients: ["strawberries", "bananas", "almond milk"],
};

const customizedSmoothie2: Partial<ISmoothie> = {
    price: 6.99,
};

console.log(customizeSmoothie(basicSmoothie, customizedSmoothie1));
console.log(customizeSmoothie(basicSmoothie, customizedSmoothie2));