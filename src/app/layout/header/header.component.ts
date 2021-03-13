import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/Service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email:any=null;
  constructor(
    private authService:AuthService, 
    private toast:ToastrService,
    private router: Router) { 
      authService.getUser().subscribe(res=>{
        this.email=res?.email;
      })
    }

  ngOnInit(): void {
  }

  async handleSignOut(){
    try{
      const res= await this.authService.signOut();
      this.router.navigateByUrl('/signin');
      this.toast.info("User Logout Successfully!");
      this.email=null;
    }catch(e){
      this.toast.error("Something Went Wrong!");
    }
  }

}
