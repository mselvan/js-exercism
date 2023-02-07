export class Cipher {
    static letters = "abcdefghijklmnopqrstuvwxyz";
    static _createRandomKey = () => Array(100)
        .fill("")
        .map(() => Cipher.letters[~~(Math.random * Cipher.letters.length)])
        .join("");

    constructor(key) {
        this._key = key ?? Cipher._createRandomKey();
    }

    encode(text) {
        return text
            .split("")
            .map((c, i) => Cipher.letters[(Cipher.letters.indexOf(c) + Cipher.letters.indexOf(this.key[i % this.key.length])) % Cipher.letters.length])
            .join("");
    }

    decode(text) {
        return text
            .split("")
            .map((c, i) => Cipher.letters[(Cipher.letters.indexOf(c) - Cipher.letters.indexOf(this.key[i % this.key.length]) + Cipher.letters.length) % Cipher.letters.length])
            .join("");
    }

    get key() {
        return this._key;
    }
}