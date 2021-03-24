import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {NgForm} from "@angular/forms"
import {finalize} from "rxjs/operators"
import {AngularFireStorage} from "@angular/fire/storage"
import {AngularFireDatabase} from "@angular/fire/database"
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user:any[]=[];
  posts:any[]=[];
  isLoading:boolean=false;

  constructor(
    private toast: ToastrService,
    private auth: AuthService,
    private route:Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { 
    this.isLoading=true;
    this.db.object(`/users`)
    .valueChanges()
    .subscribe((user:any)=>{
      if(user){
        this.user=Object.values(user);
        this.isLoading=false;
      }else{
        this.toast.error("No user found");
        this.user=[];
        this.isLoading=false;
      }
    });

    this.db.object(`/posts`)
    .valueChanges()
    .subscribe((post:any)=>{
      if(post){
        this.posts=Object.values(post);
        this.isLoading=false;
      }else{
        this.toast.error("No Posts found");
        this.posts=[];
        this.isLoading=false;
      }
    })
  }

  ngOnInit(): void {
  }

}
