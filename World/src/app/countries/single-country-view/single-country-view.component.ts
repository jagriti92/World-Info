import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WorldHttpService } from '../../world-http.service';
import { ApiInterface } from '../../api-interface';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';



@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css']
})
export class SingleCountryViewComponent implements OnInit {

  constructor(public _route: ActivatedRoute, public router: Router, public worldHttpService: WorldHttpService, private spinnerService: Ng4LoadingSpinnerService) {}
  public topLevelDomain : string;
  public singleCountryData: ApiInterface[] = []; // fills with sinf=gle country data
  public id;
  public translation: any[] = []; // to get translations display 

  ngOnInit() {

      this.id = this._route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.spinnerService.show();
      this.getSingleCountryData(this.id);
      setTimeout(() => {
          this.spinnerService.hide();// hides loader
      }, 2000);
  }

  public getSingleCountryData: any = (id) => { // getting single country data from service

      this.worldHttpService.getSingleCountryDetails(id).subscribe((apiResponse) => {

          this.singleCountryData = this.singleCountryData.concat(apiResponse[0]);
          console.log(this.singleCountryData);
          this.getTranslation(apiResponse[0].translations);

      })
  }

  public getTranslation: any = (data) => { // getting translations display array
      for (let i in data) {
          if (data[i] != 'null' || data[i] != 'undefined') {
              this.translation.push(data[i]);
          }
      }
      console.log(this.translation);
      return this.translation;
  }
}