import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';
import {NgForm} from "@angular/forms"
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private toast: ToastrService,
    private authService:AuthService,
    private route:Router) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
      const {email,password} = f.form.value;
      this.authService.signIn(email, password)
        .then((res)=>{
          this.route.navigateByUrl('');
          this.toast.success("Signin success");
        })
        .catch((error)=>{
          this.toast.error(error);
        })
    }

}
