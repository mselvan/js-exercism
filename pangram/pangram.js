//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (text) => {
    if (!text) return false;
    text = text.toLowerCase();
    const alphabets = 'abcdefghijklmnopqrstuvwxyz';
    return [...alphabets].every(letter => text.indexOf(letter) != -1);
};
