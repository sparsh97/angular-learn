import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number=0;

  constructor(){

  }

  
  incrementCounter(){
    this.counter++;
  }

  decrementCounter(){
    this.counter--;
  }
  
  resetCounter(){
    this.counter=0;
  }
}
