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

   getAllProducts(){
        return this.http.get("http://localhost:9013/getAllProducts/");
   }

   deleteProduct(pid){

    return this.http.delete("http://localhost:9013/deleteProduct/"+pid);

   }

   updateProduct(product){

    return this.http.put("http://localhost:9013/updateProduct/"+product.pid,product);

   }


}
