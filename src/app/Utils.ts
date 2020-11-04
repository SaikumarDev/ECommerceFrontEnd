export class Utils{
       static userLoggedIn=false;
      static loggedIn(){
        Utils.userLoggedIn=true;
      }
       static currentStatus(){
           console.log('current status',Utils.userLoggedIn);
           return Utils.userLoggedIn;
       }
}