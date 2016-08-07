import { Component } from '@angular/core';

import { DrinksComponent } from './drink/drinks.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ DrinksComponent ]
})
export class AppComponent { 
  // [ ] Means property binding - C to D
  // { } Means property binding - D to C

  title = 'Calorie App';
  developer = 'Benni Russell';
  appColor = 'blue';
  listType = 'none';

  changeSuitColor() {
    this.appColor = this.appColor === 'blue' ? 'red' : 'blue';
  }

}


