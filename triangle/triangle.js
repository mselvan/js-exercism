//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get isEquilateral() {
        return this.a !== 0 && this.a === this.b && this.a === this.c && this.b === this.c;
    }

    get isIsosceles() {
        return this.isTriangle() && (this.a === this.b || this.a === this.c || this.b === this.c);
    }

    get isScalene() {
        return this.isTriangle() && (this.a !== this.b && this.a !== this.c && this.b !== this.c);
    }

    isTriangle() {
        const sides = [this.a, this.b, this.c].sort((a, b) => a - b);
        return sides[0] + sides[1] >= sides[2];
    }
}
