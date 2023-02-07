
const usedNames = [];
export class Robot {
    get name() {
        return this._name;
    }

    set name(value) {
        throw new Error("Cannot modify value outside the class");
    }
    constructor() {
        this._name = generateUniqueName();
        usedNames.push(this._name);
    }
    reset = function() {
        this._name = generateUniqueName();
        usedNames.push(this.name);
    }
}

const generateUniqueName = () => {
    const name = generateName();
    return !usedNames.includes(name) ? name : generateUniqueName();
}

const generateName = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetter1 = letters[Math.floor(Math.random() * letters.length)];
    const randomLetter2 = letters[Math.floor(Math.random() * letters.length)];
    const randomNumber = (Math.floor(Math.random() * 1000) + 1).toString().padStart(3, '0');
    return `${randomLetter1}${randomLetter2}${randomNumber}`;
}

Robot.releaseNames = () => {
    usedNames.splice(0, usedNames.length);
};
