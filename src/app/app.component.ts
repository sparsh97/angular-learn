import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {PasswordChecker} from "../app/Custom-Validators/password-validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactive-signup-form';
  signupForm!: FormGroup;
  submitted: boolean= false;

  constructor(private formBuilder: FormBuilder){

  }

  ngOnInit(){
    this.signupForm=this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      confirmPassword: ['',Validators.required],
      accept: [false,Validators.requiredTrue]
    }, {Validators: PasswordChecker('password','confirmPassword')})
  }

  /**
   * Gets h
   */
  get h(){
    return this.signupForm.controls;
  }

  /**
   * Determines whether reset on
   */
  onReset(){
    this.submitted=false;
    this.signupForm.reset();
  }

  /**
   * Determines whether submit on
   */
  onSubmit(){
    this.submitted=true;
    if(this.signupForm.valid){
      console.table(this.signupForm.value);
    }else{
     
    }
  }
}
