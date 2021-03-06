import { FormGroup } from "@angular/forms";

export function PasswordChecker(password:string, cnfPassword:string){

    return (formGroup: FormGroup)=>{
        const passwords= formGroup.controls[password];
        const confirmPassword= formGroup.controls[cnfPassword];
        if(passwords.value !== confirmPassword.value){
            confirmPassword.setErrors({mustMatch: true});
        }else{
            confirmPassword.setErrors(null);
        }
    }
}