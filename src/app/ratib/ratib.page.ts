import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ratib',
  templateUrl: './ratib.page.html',
  styleUrls: ['./ratib.page.scss'],
})
export class RatibPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  ratib : any[] = [];

  constructor(
    public _apiServices: ApiService,
    ) {
    this.getRatib();
  }

  ngOnInit() {
    this.getRatib();
  }

  getRatib() {
    this._apiServices.getRatib().subscribe((res:any)=>{
      console.log('cek', res);
      this.ratib = res;
    },(error:any)=>{
      console.log('error',error);
    })
  }

}
