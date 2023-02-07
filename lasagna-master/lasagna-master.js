/// <reference path="./global.d.ts" />
// @ts-check

export function cookingStatus(time) {
    if (!time && time !== 0) {
        return "You forgot to set the timer."
    } else if (time > 0) {
        return "Not done, please wait."
    }
    return "Lasagna is done.";
}

export function preparationTime(layers, weight = 2) {
    return layers.length * weight;
}

export function quantities(layers) {
    const NOODLES_OR_SAUCE = ['noodles', 'sauce'];
    const filteredLayers = layers.filter((layer) => NOODLES_OR_SAUCE.includes(layer));
    return {
        noodles: filteredLayers.filter((layer) => layer === 'noodles').length * 50,
        sauce: filteredLayers.filter((layer) => layer === 'sauce').length * 0.2,
    };
}

export function addSecretIngredient(friendsList, myList) {
    myList.push(friendsList[friendsList.length - 1]);
}

export function scaleRecipe(recipe, scale) {
    const scaleFactor = scale ? scale / 2 : 1;
    return Object.fromEntries(Object.entries(recipe).map(([key, val]) => [key, val * scaleFactor]));
}