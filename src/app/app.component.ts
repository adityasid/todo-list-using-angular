import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // name: string = 'Aditya';

  constructor() {
    // this.changeName('Sid');
    // console.log('2');
  }

  changeName(name: string): void {
    // this.name = name;
  }

}
