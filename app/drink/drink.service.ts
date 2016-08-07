import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

const URL_DRINKS = 'app/drinks.json'

@Injectable()
export class DrinkService {
  
  constructor(private _http: Http) {}

  getDrinks(){
    this._http.get(URL_DRINKS);
  }
}