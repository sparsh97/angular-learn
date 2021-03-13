import { Component } from '@angular/core';
import { AuthService } from './Service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth:AuthService,
    ){ auth.getUser().subscribe((res)=>{
      console.log(res);
    },(error)=>{
      console.log(error);
    });
  }
  title = 'ClientApp';
}
