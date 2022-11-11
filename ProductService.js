"use strict";
//IProductService.ts dosyası içerisindeki metodlarını bu dosya içerisinde kullanacağız(silme, ekleme, okuma vs.)
exports.__esModule = true;
exports.ProductService = void 0;
var SimpleDataSource_1 = require("./SimpleDataSource");
var ProductService = /** @class */ (function () {
    function ProductService() {
        var _this = this;
        this.dataSource = new SimpleDataSource_1.SimpleDataSource();
        this.products = new Array();
        this.dataSource.getProducts().forEach(function (p) { return _this.products.push(p); }); //dataSource'a gelen getProducts yani data tarafonda tanımladığımız 4 tane elemanı forEach ile ProductService içerisindeki products içerisine pushladık
    }
    ProductService.prototype.getById = function (id) {
        return this.products.filter(function (p) { return p.id === id; })[0]; //
    };
    ProductService.prototype.getProducts = function () {
        return this.products; //tüm listeyi geri döndüreceğiz yani bize products içerisine atadığımız SimpleDataSource içerisinde tanımlı olan bütün verileri gönderecek
    };
    ProductService.prototype.saveProduct = function (product) {
        if (product.id == 0 || product.id == null) {
            product.id = this.generateId();
            this.products.push(product); //ürünün yeni eklendiğini id sinden anlıyoruz ve product içerisine pushluyoruz.
        }
        else { //eğer null değilse yani id si var ise;
            var index = this.products.indexOf(product); //id si olup olmadığını index numarasından anlıyoruz.
            for (var i = 0; i < this.products.length; i++) {
                if (this.products[i].id === product.id) {
                    index = i;
                }
            }
            this.products.splice(index, 1, product); //parantez içerisinde yazan: verilen indexten itibaren 1 ürünü silip yerine product ekliyor
        }
    };
    ProductService.prototype.deleteProduct = function (product) {
        var index = this.products.indexOf(product);
        if (index > 0) {
            this.products.splice(index, 1); //index 0 dan büyük ise products içerisinde verilen indexten itibaren ilk ürünü sileceğiz
        }
    };
    ProductService.prototype.generateId = function () {
        var key = 1;
        while (this.getById(key) != null) { //getById methoduna key bilgisini gönderdik. getById null değil ise 1 arttıracağız
            key++;
        }
        return key;
    };
    return ProductService;
}());
exports.ProductService = ProductService;
