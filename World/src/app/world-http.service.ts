import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class WorldHttpService {

  private baseUrl = 'https://restcountries.eu/rest/v2';

  constructor(private _http: HttpClient) {}


  public getAllCountriesFromRegion(Name: string, Value: string): Observable < any > {
      //returns the obseervable data from api
      return this._http.get(`${this.baseUrl}/${Name}/${Value}?fields=name;capital;callingCodes;region;subregion;timezones;currencies;languages;flag`)

          .catch(this.handleError);
      //catching error response
  }

  public getSingleCountryDetails: any = (id) => {
//gets single country details
      let myResponse = this._http.get(`${this.baseUrl}/name/${id}`);
      return myResponse;
  }
  //error handling from api in case error occcures from fetching data
  public handleError(err: HttpErrorResponse) {

      let errorMessage = '';
      if (err.error instanceof Error) {

          errorMessage = `Error Occured`;

      }

      console.error(errorMessage);

      return Observable.throw(errorMessage);

  } // End handleError

}