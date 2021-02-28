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


  /**
   * Increments counter
   */
  incrementCounter(){
    if(this.counter<10){
      this.counter++;
    }else{
      alert("Counter cannot be greater than 10!");
    }
  }

  /**
   * Decrements counter
   */
  decrementCounter(){
    if(this.counter>0){
      this.counter--;
    }else{
      alert("Counter cannot be negative!");
    }
  }
  
  /**
   * Resets counter
   */
  resetCounter(){
    this.counter=0;
  }
}
