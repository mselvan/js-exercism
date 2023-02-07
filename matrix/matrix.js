//
// This is only a SKELETON file for the 'Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Matrix {
    constructor(input) {
        this._rows = input.split('\n').map(row => row.split(' ').map(Number));
        this._columns = this._rows[0].map((_, colIndex) => this._rows.map(row => row[colIndex]));
    }

    get rows() {
        return this._rows;
    }

    get columns() {
        return this._columns;
    }
}
