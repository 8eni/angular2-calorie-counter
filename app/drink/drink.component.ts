import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-drink',
  templateUrl: 'drink.component.html'
})
export class DrinkComponent implements OnInit {
 @Input() drink: {id: number, name: string};
  constructor() {}

  ngOnInit() {
    
  }
}


