import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import {faThumbsUp,faThumbsDown,faShareSquare} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit,OnChanges {
  @Input() post:any;
  faThumbsUp=faThumbsUp;
  faThumbsDown=faThumbsDown;
  faShareSquare=faShareSquare;

  uid!:any;
  upvote=0;
  downvote=0;
  constructor(
     private toast: ToastrService,
    private auth: AuthService,
    private route:Router,
    private db: AngularFireDatabase,
    private storage: AngularFireStorage
  ) { 
    this.auth.getUser().subscribe((user)=>{
      this.uid=user?.uid;
    })
  }
  ngOnChanges() {
    if(this.post.vote){
      Object.values(this.post.vote).map((val:any)=>{
        if(val.upvote){
          this.upvote+=1;
        }
        if(val.downvote){
          this.downvote+=1;
        }
      })
    }
  }

  ngOnInit(): void {
  }

  upvotePost(){
    console.log("upvote");
    this.db.object(`/posts/${this.post.id}/vote/${this.uid}`)
    .set({upvote:1})
  }

  downvotePost(){
    console.log("downvote");
    this.db.object(`/posts/${this.post.id}/vote/${this.uid}`)
    .set({downvote:1})
  }

  getInstaUrl(){
    return `https://instagram.com/${this.post.instaId}`;
  }

}
