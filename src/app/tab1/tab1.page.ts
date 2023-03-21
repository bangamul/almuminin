import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  imam : any;
  bilal : any;
  jadwal : any;
  tanggalhijriah : any;
  today : any = {};
  // tarawih : any[] = [];
  // let today : any = {};
  // today = {"id":"1","imam":"Ahmad Fauji","bilal":"Dana","jadwal":"2023-03-22","tanggalhijriah":"1 Ramadhan 1444 H"}


  constructor(
    public _apiServices: ApiService,
    ) {
    this.getPerhari();
  }

  ionViewDidEnter(){
    this.getPerhari();
  }

  ngOnInit() {
  }

  // getImam() {
  //   this._apiServices.getImam().subscribe((res:any)=>{
  //     console.log('cek', res);
  //     this.tarawih = res;
  //   },(error:any)=>{
  //     console.log('error',error);
  //   })
  // }

  getPerhari() {
    this._apiServices.getPerhari().subscribe((res:any)=>{
      console.log('cek', res);
      // this.today = res;
      this.today = JSON.parse(JSON.stringify(res));
    },(error:any)=>{
      console.log('error',error);
    })
  }

}
