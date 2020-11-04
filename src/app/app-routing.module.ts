import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

   {
     path: 'login',
     component:LoginComponent
   },
   {
     path: 'register',
     component:RegisterComponent
   },
   {
     path: 'forgotPassword',
     component:ForgotpasswordComponent

   },
   {
     path:'dashboard',
     component:DashboardComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
