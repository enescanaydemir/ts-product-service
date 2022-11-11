"use strict";
exports.__esModule = true;
var Product_1 = require("./Product");
var ProductService_1 = require("./ProductService");
var _productService = new ProductService_1.ProductService();
var result;
result = _productService.getProducts(); //bütün listeleri(products) aldık
result = _productService.getById(2); //tek bir listeyi aldık(id: 2 olan)
var p = new Product_1.Product(); //yeni bir liste ekliyoruz(id ekleme metodunu kotnrol edeceğiz);
p.id = 2;
p.name = "Iphone X";
p.price = 10000;
p.category = "Phone";
_productService.saveProduct(p);
// _productService.deleteProduct(result);
result = _productService.getProducts();
console.log(result);
