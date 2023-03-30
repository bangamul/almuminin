import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-doa',
  templateUrl: './doa.page.html',
  styleUrls: ['./doa.page.scss'],
})
export class DoaPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  doa : any[] = [];

  term;

  constructor(
    public _apiServices: ApiService,
    ) {
    this.getDoa();
  }

  ngOnInit() {
    this.getDoa();
  }

  getDoa() {
    this._apiServices.getDoa().subscribe((res:any)=>{
      console.log('cek', res);
      this.doa = res;
    },(error:any)=>{
      console.log('error',error);
    })
  }
}
