import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mat-test';
  dictionaryTab: {[key:string] : boolean} = {
    "homeOpen" : false,
    "recentOpen": false,
    "searchOpen": false
  };
}
