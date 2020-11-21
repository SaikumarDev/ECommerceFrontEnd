import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidator } from './Username.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

    loginForm=new FormGroup({
        username: new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(10),UsernameValidator.cannotHaveSpace]),
        password: new FormControl('',[Validators.required,Validators.minLength(5)])
    })

    get username(){
       return this.loginForm.get('username')
    }

    get password(){
      return this.loginForm.get('password');
    }

}
