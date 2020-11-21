
import {AbstractControl, ValidationErrors} from '@angular/forms';

export class UsernameValidator{

     static cannotHaveSpace(control:AbstractControl):ValidationErrors | null{

          if(control.value.includes(' ')){

             return {
                cannotHaveSpace:true
             }

          }
          else

          {
              return null;
          }

     }


}




