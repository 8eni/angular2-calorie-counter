import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: `app/app.component.html`
})
export class AppComponent { 
  // [ ] Means property binding - C to D
  // { } Means property binding - D to C

  title = 'Calorie App';
  developer = 'Benni Russell';
  appColor = 'blue';
  listType = 'none';
  drinks = [
    {id: 1, name: 'tonic water'},
    {id: 2, name: 'Soda water'},
    {id: 3, name: 'Ginger Ale'}
  ];

  changeSuitColor() {
    this.appColor = this.appColor === 'blue' ? 'red' : 'blue';
  }

}


