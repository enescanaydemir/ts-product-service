export class Product {
    constructor(
        public id?: number,
        public name?: string,
        public category?: string,
        public price?: number
    ) { }
}

// TS ile Product sınıfı üzerinden veri tabanından bütün verileri aldığımız veya id göndereceğiz o id hangi ürün ise onu bana getir veya ürün ekleme, silme, güncelleme yapacağımız bir örnek olacak.
