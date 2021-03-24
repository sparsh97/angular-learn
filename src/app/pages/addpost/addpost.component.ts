import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {NgForm} from "@angular/forms"
import {finalize} from "rxjs/operators"
import {AngularFireStorage} from "@angular/fire/storage"
import {AngularFireDatabase} from "@angular/fire/database"
import * as uuid from 'uuid';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  locationName!: string;
  description!: string;
  picture!: string;
  user!:any;
  constructor(
    private toast: ToastrService,
    private auth: AuthService,
    private route:Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) {
    auth.getUser().subscribe((res)=>{
      this.db.object(`/users/${res?.uid}`)
      .valueChanges()
      .subscribe((user)=>{
        this.user=user;
      })
    })
   }

  ngOnInit(): void {
  }

  onSubmit(){
    const uid= uuid.v4();

    this.db.object(`/posts/${uid}`)
    .set({
      id:uid,
      locationName: this.locationName,
      description:this.description,
      picture: this.picture,
      by: this.user.name,
      instaId: this.user.instaUserName,
      date: Date.now()
    })
    .then(()=>{
      this.toast.success("Post Added Successfully");
      this.route.navigateByUrl('/');
    })
    .catch((err)=>{
      this.toast.error("Oopssssss.....");
    })
  }

  async uploadFile(event:any){

    const file= event.target.files[0];

    const filePath= file.name;
    const fileref= this.storage.ref(filePath);
    const task= this.storage.upload(filePath,file);

    task.percentageChanges().subscribe((p)=>{
      console.log(p);
    });

    task.snapshotChanges().pipe(finalize(()=>{
      fileref.getDownloadURL().subscribe((url)=>{
        this.picture=url;
        this.toast.success("Image Uploaded Successfully");
      })
    })).subscribe(()=>{
      console.log('...');
    })
  }

}
