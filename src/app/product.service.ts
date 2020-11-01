import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private  http:HttpClient) {

   }
   
   addANewProduct(product){
     // API Call
      return this.http.post("http://localhost:9013/addProduct",product);
   }

}
