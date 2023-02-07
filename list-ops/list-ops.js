export class List {
    constructor(values = []) {
        this.values = values;
    }

    append(anotherList) {
        return new List(this.values.concat(anotherList.values));
    }

    concat(...listOfLists) {
        const listOfValues = listOfLists.map((list) => list.values).flat().map((subList) => subList.values).flat();
        return new List(this.values.concat(listOfValues));
    }

    filter(predicate) {
        return new List(this.values.filter(predicate));
    }

    map(callback) {
        return new List(this.values.map(callback));
    }

    length() {
        return this.values.length;
    }

    foldl(callback, initialAcc) {
        return this.values.reduce((acc, item) => callback(acc, item), initialAcc);
    }

    foldr(callback, initialAcc) {
        return this.values.reduceRight((item, acc) => callback(item, acc), initialAcc);
    }

    reverse() {
        return new List(this.values.reverse());
    }
}
