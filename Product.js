"use strict";
exports.__esModule = true;
exports.Product = void 0;
var Product = /** @class */ (function () {
    function Product(id, name, category, price) {
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
    }
    return Product;
}());
exports.Product = Product;
// TS ile Product sınıfı üzerinden veri tabanından bütün verileri aldığımız veya id göndereceğiz o id hangi ürün ise onu bana getir veya ürün ekleme, silme, güncelleme yapacağımız bir örnek olacak.
