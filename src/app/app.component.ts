import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from './Services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'random-card';
  user:any;
  constructor(private userService:UserService, private toastrService:ToastrService){}
  ngOnInit(): void {
    this.userService.getRandomUser().subscribe((user:any)=>{
      console.log(user);
      this.user=user['results'][0];
    },(error)=>{
      this.toastrService.error(error.status,"oopsss");
    });
  }

  /**
   * Determines whether refresh on
   */
  onRefresh(){
    this.userService.getRandomUser().subscribe((user:any)=>{
      this.user= user['results'][0];
    },(error)=>{
      this.toastrService.error(error);
    })
    // window.location.reload();
  }
}
