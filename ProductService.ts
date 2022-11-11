//IProductService.ts dosyası içerisindeki metodlarını bu dosya içerisinde kullanacağız(silme, ekleme, okuma vs.)

import { IProductService } from "./IProductService";
import { Product } from './Product';
import { SimpleDataSource } from "./SimpleDataSource";

export class ProductService implements IProductService {

    private dataSource: SimpleDataSource;
    private products: Array<Product>; //products adında bir değişken oluşturduk array olarak tanımladık ve tipini Product yaptık

    constructor() {
        this.dataSource = new SimpleDataSource();
        this.products = new Array<Product>();
        this.dataSource.getProducts().forEach(p => this.products.push(p)) //dataSource'a gelen getProducts yani data tarafonda tanımladığımız 4 tane elemanı forEach ile ProductService içerisindeki products içerisine pushladık
    }


    getById(id: number): Product {
        return this.products.filter(p => p.id === id)[0]; //
    }
    getProducts(): Product[] {
        return this.products; //tüm listeyi geri döndüreceğiz yani bize products içerisine atadığımız SimpleDataSource içerisinde tanımlı olan bütün verileri gönderecek
    }
    saveProduct(product: Product): void { //ürün yeni ekleniyorsa id bilgisi olmayacağı için id bilgisi ekleyeceğiz.
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product); //ürünün yeni eklendiğini id sinden anlıyoruz ve product içerisine pushluyoruz.
        } else {//eğer null değilse yani id si var ise;
            let index = this.products.indexOf(product);  //id si olup olmadığını index numarasından anlıyoruz.

            for(let i=0; i<this.products.length; i++) {
                if(this.products[i].id === product.id) {
                    index = i;
                }
            }

            this.products.splice(index, 1, product); //parantez içerisinde yazan: verilen indexten itibaren 1 ürünü silip yerine product ekliyor
        }
    }

    deleteProduct(product: Product): void {
        let index = this.products.indexOf(product);
        if(index>0) {
            this.products.splice(index,1) //index 0 dan büyük ise products içerisinde verilen indexten itibaren ilk ürünü sileceğiz
        }
    }

    private generateId(): number { //bu metodu yukarıda id si olmayan kullanıcıya numara üretsin ve bunu id ksımına atamak için yazdık. Yardımcı metod
        let key = 1;
        while (this.getById(key) != null) { //getById methoduna key bilgisini gönderdik. getById null değil ise 1 arttıracağız
            key++;
        }

        return key;
    }

}