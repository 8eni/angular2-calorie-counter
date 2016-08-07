import { Injectable } from '@angular/core';

@Injectable()
export class DrinkService {
  
  constructor() {}

  getDrinks(){
    return[
      {id: 1, name: 'Tonic Water'},
      {id: 2, name: 'Soda Water'},
      {id: 3, name: 'Ginger Ale'}
    ];

  }
}