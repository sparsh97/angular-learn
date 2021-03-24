import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {NgForm} from "@angular/forms"
import {finalize} from "rxjs/operators"
import {AngularFireStorage} from "@angular/fire/storage"
import {AngularFireDatabase} from "@angular/fire/database"

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  picture:string='';
  uploadPercent:number=0;
  constructor(
    private toast: ToastrService,
    private auth: AuthService,
    private route:Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage) { }

  ngOnInit(): void {
  }

  onSubmit(f:NgForm){
    const {email, password, username, country,bio,name}= f.form.value;

    this.auth.signUp(email,password)
    .then((res)=>{
      const uid= res.user?.uid;
       console.log(res,uid);
      this.db.object(`/users/${uid}`)
      .set({
        id: uid,
        name:name,
        email:email,
        instaUserName:username,
        country: country,
        bio:bio,
      })
    })
    .then(()=>{
      this.route.navigateByUrl('');
      this.toast.success("Signup Successfully");
    })
    .catch((err)=>{
      console.log(err,"..............");
      this.toast.error(err);
    })
  }

}
