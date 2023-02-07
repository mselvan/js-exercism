export const transform = scores => Object.fromEntries(Object.entries(scores).flatMap(([score, letters]) => letters.map(letter => [letter.toLowerCase(), +score])));
