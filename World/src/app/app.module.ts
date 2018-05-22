import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { WorldHttpService } from './world-http.service';
import { CountryModule } from './countries/country.module';
import { CountryFilterPipe } from './country-filter.pipe';
import { NgModel } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { SortPipe } from './sort.pipe';
import { CapitalFilterPipe } from './capital-filter.pipe';
import { SubregionFilterPipe } from './subregion-filter.pipe';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    FormsModule,
    CountryModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot([
      {path : '', component : HomeComponent, pathMatch : 'full'},
      {path : 'home', component : HomeComponent},
      {path : '*', component : HomeComponent},
      {path : '**', component : HomeComponent}      
    ])
  ],
  providers: [WorldHttpService,WorldHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
