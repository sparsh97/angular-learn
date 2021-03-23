import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:any=null;
  constructor(
    private auth:AuthService,
    private toast:ToastrService,
    private route:Router) { 
      auth.getUser().subscribe((user)=>{
        this.email=user?.email;
      })
    }

  ngOnInit() {

  }

  async handleSinOut(){
    try {
      await this.auth.signOut();
      this.email=null;
      this.route.navigateByUrl("/signin");
      this.toast.info("Logout Successfully!");
    } catch (error) {
      this.toast.error(error);
    }
  }

}
