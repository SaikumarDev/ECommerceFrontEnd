import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private prodServ:ProductService) { }

  ngOnInit(): void {

    this.prodServ.getAllProducts().subscribe(
      (response) => {
            this.products=response;
      }
    )
    

  }
  deleteProduct(productId){
     console.log('productId',productId);

     this.prodServ.deleteProduct(productId).subscribe(
       (response) => {
         this.apiResponse=response;
         if(this.apiResponse.status){
          this.prodServ.getAllProducts().subscribe(
            (response) => {
                  this.products=response;
            }
          )
          
         }
       }
     )
 

  }

  apiResponse;
  products;

  addProduct(data){

    console.log(data);

    console.log("data",data.value);


    this.prodServ.addANewProduct(data.value).subscribe(

        (response) =>{

          console.log(response);

          this.apiResponse= response;

          if(this.apiResponse._id){

              this.prodServ.getAllProducts().subscribe(
                (response) => {
                      this.products=response;
                }
              )

          }

        }

    )

  }

}
