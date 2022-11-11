"use strict";
exports.__esModule = true;
exports.SimpleDataSource = void 0;
var Product_1 = require("./Product");
var SimpleDataSource = /** @class */ (function () {
    function SimpleDataSource() {
        this.products = new Array(new Product_1.Product(1, "Iphone 14 Pro", "Phone", 19600), new Product_1.Product(2, "Iphone 13 Pro", "Phone", 17000), new Product_1.Product(3, "Iphone 12 Pro", "Phone", 16000), new Product_1.Product(4, "Iphone 11 Pro", "Phone", 15000));
    }
    SimpleDataSource.prototype.getProducts = function () {
        return this.products;
    };
    return SimpleDataSource;
}());
exports.SimpleDataSource = SimpleDataSource;
