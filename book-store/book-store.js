export const cost = (books) => {
    const disc = [0, 0.05, 0.1, 0.2, 0.25];
    const bookSet = []
    while (books.length > 0) {
        const set = new Set(books);
        bookSet.push(set.size);
        for (let e of set) {
            books.splice(books.indexOf(e), 1);
        }
    }
    while (bookSet.includes(3) && bookSet.includes(5)) {
        bookSet.splice(bookSet.indexOf(3), 1);
        bookSet.splice(bookSet.indexOf(5), 1);
        bookSet.push(4,4);
    }
    return bookSet.reduce((acc, cur) => acc + (cur * 800 * (1 - disc[cur - 1])),0);
};