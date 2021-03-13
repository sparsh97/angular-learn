import { Component, OnInit } from '@angular/core';

import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private toast: ToastrService,
    private authService:AuthService,
    private route:Router) { }

  ngOnInit(): void {}

    onSubmit(f:NgForm){
      const {email,password} = f.form.value;
      this.authService.signUp(email, password)
        .then((res)=>{
          this.route.navigateByUrl('/');
          this.toast.success("Signup success");
        })
        .catch((error)=>{
          this.toast.error(error);
        })
    }

}
