import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  name;
  pid;
  price;
  ap=true;
  sp=false;

  file: File = null;

  onChange(event) { 
    this.file = event.target.files[0]; 
    
    console.log('file', this.file);
} 

  constructor(private prodServ:ProductService) { }

  ngOnInit(): void {    
     this.getAllProducts();
  }

  private getAllProducts(){
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
            this.getAllProducts();
          
         }
       }
     )
 

  }

  apiResponse;
  products;

  addProduct(data){

    console.log(data);

    console.log("data",data.value);

    console.log("pid",data.value.pid);

    console.log('filename', this.file.name);

    let formData = new FormData();  
        
    // Store form name as "file" with file data 
    formData.append("image", this.file, this.file.name); 
    formData.append('pid',data.value.pid);
    formData.append('name',data.value.name);
    formData.append('price',data.value.price);

    // for (var key of formData.entries()) {
		// 	console.log(key[0] + ', ' + key[1])
		// }

    console.log('formData in Component', formData);

    this.prodServ.addANewProduct(formData).subscribe(

        (response) =>{

          console.log(response);

          this.apiResponse= response;

          if(this.apiResponse._id){

            data.reset();

             this.getAllProducts();

          }
        }
    )
  }
   editProduct(product){
     this.name=product.name;
     this.price=product.price;
     this.pid=product.pid;
       this.ap=false;
       this.sp=true;
   }
   saveProduct(){

     let data={
       name: this.name,
       pid:this.pid,
       price:this.price
     }

     this.prodServ.updateProduct(data).subscribe(
       response => {
         this.apiResponse=response;
         if(this.apiResponse.status){
          this.ap=true;
          this.sp=false;
          this.name="";
          this.price="";
          this.pid="";
           this.getAllProducts();
         }
       }
     )

   }

}
