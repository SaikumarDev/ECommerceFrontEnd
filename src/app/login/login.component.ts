import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Utils } from '../Utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  authenticate(userdata){

    alert("I am in")
    let user=userdata.value;
    console.log(user);
      
     if(user.emailId == "sai@gmail.com" && user.password == "sai123"){
        Utils.loggedIn();
       this.router.navigateByUrl('dashboard');

     }
  }

}
