import { Component } from '@angular/core';
import { Detail } from './detail/detail.model'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  Detail : Detail[];

  constructor() {
    this.Detail = [
    new Detail(
      "David Brennan", "52 Brooklyn Avenue", 
      "S00172994", "044 9234728", "Games Developer",
      ".images/user.jpg"),
    new Detail(
      "Adrian Fearon", "10 Oakcrest Rd.", 
      "S00148923", "082 6284657", "Lead Audio Artist",
      ".images/user.jpg"), 
    new Detail(
      "Jack Gilmartin", "36 Mellow Street", "S00182481", 
      "086 3159035", "Lead Engine Programmer",
      ".images/user.jpg"),
    new Detail(
      "Liam McManus", "9 Fairview", 
      "S00169401", "089 4139502", "Game Designer",
      ".images/user.jpg")]
  }
}
