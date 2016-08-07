import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: 'app/drink/drink.component.html'
})
export class DrinkComponent implements OnInit {
 @Input() drink: {id: number, name: string};
  constructor() {}

  ngOnInit() {
    
  }
}


