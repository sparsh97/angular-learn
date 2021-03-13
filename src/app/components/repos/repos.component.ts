import { Component, OnInit, Input, OnChanges, ChangeDetectorRef, SimpleChanges } from '@angular/core';
import { GithubService } from 'src/app/Service/github.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
})
export class ReposComponent implements OnInit, OnChanges {

  @Input() reposUrl: any; 
  repos:any[]=[];
  constructor(private githubService: GithubService, private ref:ChangeDetectorRef) { }

  ngOnChanges() {
   if(this.reposUrl){
     this.githubService.getUserRepos(this.reposUrl).subscribe(
       (res: any) =>{
       this.repos=res;
       this.ref.detectChanges();
     },(error)=>{
       console.log(error);
     })
   }
  }

  ngOnInit(): void {
    // this.githubService.getUserRepos(this.reposUrl)
  }

}
