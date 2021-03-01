import { Component } from '@angular/core';
import randomWords from '../assets/utils/words';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  limit: any=10;
  title= 'word-generator';
  words='';

  /**
   * Handles slide change
   * @param newLimit 
   */
  handleSlideChange(newLimit:any){
    this.limit= newLimit?.target?.value;
  }

  /**
   * Generates app component
   */
  generate(){
    this.words= randomWords.slice(0,this.limit).join(' ');
  }
}
