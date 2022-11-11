import { Product } from './Product';
import { ProductService } from './ProductService'

let _productService = new ProductService();

let result;

result = _productService.getProducts(); //bütün listeleri(products) aldık
result = _productService.getById(2) //tek bir listeyi aldık(id: 2 olan)


let p = new Product(); //yeni bir liste ekliyoruz(id ekleme metodunu kotnrol edeceğiz);

p.id = 2;
p.name = "Iphone X";
p.price = 10000;
p.category = "Phone";

_productService.saveProduct(p);
// _productService.deleteProduct(result);
result = _productService.getProducts();

console.log(result);
