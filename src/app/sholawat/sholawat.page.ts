import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sholawat',
  templateUrl: './sholawat.page.html',
  styleUrls: ['./sholawat.page.scss'],
})
export class SholawatPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  sholawat : any[] = [];

  term;

  constructor(
    public _apiServices: ApiService,
    ) {
    this.getSholawat();
  }

  ngOnInit() {
    this.getSholawat();
  }

  getSholawat() {
    this._apiServices.getSholawat().subscribe((res:any)=>{
      console.log('cek', res);
      this.sholawat = res;
      // console.log('coba ini dah:', this.sholawat);
    },(error:any)=>{
      console.log('error',error);
    })
  }

}
