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

  changeSuitColor() {
    this.appColor = this.appColor === 'blue' ? 'red' : 'blue';
  }

}


