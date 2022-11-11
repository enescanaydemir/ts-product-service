import { Product } from "./Product";

export class SimpleDataSource {
    private products: Array<Product>; //private olarak belirlediğimiz products ın içerisine aşağıda constructor içerisinde tanımladığımız liste atanacak

    constructor() { //bize 4 tane eleman getirecek bir data source yazdık;
        this.products = new Array<Product>(
            new Product(1, "Iphone 14 Pro", "Phone",19600),
            new Product(2, "Iphone 13 Pro", "Phone",17000),
            new Product(3, "Iphone 12 Pro", "Phone",16000),
            new Product(4, "Iphone 11 Pro", "Phone",15000),  
        );
    }

    getProducts(): Product[] {
        return this.products;
    }
}

