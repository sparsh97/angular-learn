import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() user:any;
  constructor(private userService:UserService) { }

  ngOnInit(): void {

    
  }

}
