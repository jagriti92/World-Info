import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiInterface } from '../../api-interface';
import { WorldHttpService } from '../../world-http.service';
import { CountryFilterPipe } from'../../country-filter.pipe';
import { SortPipe } from '../../sort.pipe';
import { CapitalFilterPipe } from '../../capital-filter.pipe';
import { SubregionFilterPipe } from '../../subregion-filter.pipe';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-all-country',
  templateUrl: './all-country.component.html',
  styleUrls: ['./all-country.component.css'],
})
export class AllCountryComponent implements OnInit {

  public name : any;
  public value : any;
  public term : string = "";
  public caps : string = "";
  public reg : string = "";
  public img : any; //to get the respective image of region
  public view: string = "ascending";
  public Countries: ApiInterface[] = []; // gets all data from api response
  public currencyDetail: any[] = [];
  p: number = 1;


  constructor(private worldHttpService: WorldHttpService, private _route: ActivatedRoute, private router: Router, private spinnerService: Ng4LoadingSpinnerService) {}

  ngOnInit() {

      this._route.params.subscribe(val => { //subscribes to observable respone from service
          this.spinnerService.show();
          this.name = this._route.snapshot.paramMap.get('Name');
          this.value = this._route.snapshot.paramMap.get('Value').toUpperCase();
          

          function capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        }

          this.worldHttpService.getAllCountriesFromRegion(this.name, this.value).subscribe(
              (data) => {
                  setTimeout(() => {

                      this.Countries = data; //fills array with api response data

                      this.img = "../../../assets/"+data[0].region+"-1.jpg";

                      this.spinnerService.hide(); //hides loader
                  }, 2000);

              },
              err => {
                  alert("error")
              });
      });
  }
}