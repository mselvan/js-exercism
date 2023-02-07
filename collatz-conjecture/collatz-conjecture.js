export const steps = num => {
    if(num < 1) throw new Error('Only positive numbers are allowed');
    return num === 1 ? 0 : 1 + steps(num % 2 === 0 ? num / 2 : num * 3 + 1)
};
