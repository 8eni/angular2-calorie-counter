import { Component } from '@angular/core';

import { DrinksComponent } from './drink/drinks.component';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
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


