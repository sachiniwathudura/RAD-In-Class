export class Item {
    name: string;
    price: string;
    qty: bigint;


    constructor(name: string, price: string, qty: bigint) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }

}