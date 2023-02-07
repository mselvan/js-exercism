export class BankAccount {
    constructor() {
        this._closed = true;
    }

    open() {
        if(!this._closed) throw new ValueError();
        this._balance = 0;
        this._closed = false;
    }

    close() {
        if(this._closed) throw new ValueError();
        this._closed = true;
    }

    deposit(amount) {
        if(this._closed) throw new ValueError();
        if(amount <= 0) throw new ValueError();
        this._balance += amount;
    }

    withdraw(amount) {
        if(this._closed) throw new ValueError();
        if(this._balance < amount || amount <= 0) throw new ValueError();
        this._balance -= amount;
        return this._balance;
    }

    get balance() {
        if(this._closed) throw new ValueError();
        return this._balance;
    }
}

export class ValueError extends Error {
    constructor() {
        super('Bank account error');
    }
}
