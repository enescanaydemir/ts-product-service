import { Product } from "./Product";

export interface IProductService { //Interface içerisinde metodlar tanımladık;
    getById(id: number): Product;
    getProducts(): Array<Product>; //Geriye bir dizi dönderiyoruz ve dizinin tipi Product.
    saveProduct(product: Product): void; //dışarıdan product alıyor ve tipi product. Geriye bir değer döndürmeyecek
    deleteProduct(product: Product): void;
}