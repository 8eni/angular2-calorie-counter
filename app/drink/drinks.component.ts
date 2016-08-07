import { Component, Input, OnInit } from '@angular/core';

import { DrinkComponent } from './drink.component';

@Component({
  selector: 'app-drinks',
  templateUrl: 'app/drink/drinks.component.html',
  directives: [ DrinkComponent ]
})
export class DrinksComponent implements OnInit {
  drinks = [
    {id: 1, name: 'tonic water'},
    {id: 2, name: 'Soda water'},
    {id: 3, name: 'Ginger Ale'}
  ];

  constructor() {}

  ngOnInit() {
    
  }
}

