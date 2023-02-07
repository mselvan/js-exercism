export const compute = (strand1, strand2) => {
    if (strand1.length !== strand2.length) {
        throw new Error('strands must be of equal length')
    }
    return [...strand1].reduce((accumulator, currentValue, currentIndex) => {
        return accumulator += currentValue === strand2.charAt(currentIndex) ? 0 : 1;
    }, 0);
};
