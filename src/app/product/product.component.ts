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
  }

  addProduct(data){

    console.log(data);

    console.log("data",data.value);


    this.prodServ.addANewProduct(data.value).subscribe(

        (response) =>{

          console.log(response);

        }

    )

  }

}
