import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-maulid',
  templateUrl: './maulid.page.html',
  styleUrls: ['./maulid.page.scss'],
})
export class MaulidPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  maulid : any[] = [];

  term;

  constructor(
    public _apiServices: ApiService,
    ) {
    this.getMaulid();
  }

  ngOnInit() {
    this.getMaulid();
  }

  getMaulid() {
    this._apiServices.getMaulid().subscribe((res:any)=>{
      console.log('cek', res);
      this.maulid = res;
    },(error:any)=>{
      console.log('error',error);
    })
  }

}
