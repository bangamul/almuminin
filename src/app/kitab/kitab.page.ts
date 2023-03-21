import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-kitab',
  templateUrl: './kitab.page.html',
  styleUrls: ['./kitab.page.scss'],
})
export class KitabPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  kitab : any[] = [];

  constructor(
    public _apiServices: ApiService,
    ) {
    this.getKitab();
  }

  ngOnInit() {
    this.getKitab();
  }

  getKitab() {
    this._apiServices.getKitab().subscribe((res:any)=>{
      console.log('cek', res);
      this.kitab = res;
    },(error:any)=>{
      console.log('error',error);
    })
  }

}
