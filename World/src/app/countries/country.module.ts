import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingleCountryViewComponent } from './single-country-view/single-country-view.component';
import { AllCountryComponent } from './all-country/all-country.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CountryFilterPipe } from '../country-filter.pipe';
import { SortPipe } from '../sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { CapitalFilterPipe } from '../capital-filter.pipe';
import { SubregionFilterPipe } from '../subregion-filter.pipe';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {path : 'name/:id', component : SingleCountryViewComponent},
      {path : 'allCountry/:Name/:Value', component : AllCountryComponent}
    ])
  ],
  declarations: [SortPipe, AllCountryComponent,SingleCountryViewComponent,CountryFilterPipe,CapitalFilterPipe,SubregionFilterPipe]
})
export class CountryModule { }
