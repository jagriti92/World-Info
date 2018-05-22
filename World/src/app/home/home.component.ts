import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WorldHttpService } from '../world-http.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public topImg : string= "../../assets/world.jpg";

  constructor(public _route : ActivatedRoute, public router : Router, private worldHttpService : WorldHttpService , private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit(){
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

}
