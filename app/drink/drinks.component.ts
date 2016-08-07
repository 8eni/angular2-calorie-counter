import { Component, Input, OnInit } from '@angular/core';

import { DrinkComponent } from './drink.component';
import { DrinkService } from './drink.service';

@Component({
  moduleId: module.id,
  selector: 'app-drinks',
  templateUrl: 'drinks.component.html',
  directives: [ DrinkComponent ],
  providers: [ DrinkService ],
})
export class DrinksComponent implements OnInit {
  drinks: any[];
  constructor(private _drinkService: DrinkService) {}

  ngOnInit() {
     this.drinks = this._drinkService.getDrinks();
  }
}


