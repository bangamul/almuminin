import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

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
  dzuhur : any;
  ashar : any;
  maghrib: any;
  isya: any;
  subuh: any;
  imsak: any;
  terbit: any;
  tanggal: any;
  waktusholat : any = {};


  constructor(
    public _apiServices: ApiService,
    public http: HttpClient,
    ) {
    this.getPerhari();
    this.readDataFromAPI();
  }

  ionViewDidEnter(){
    this.readDataFromAPI();
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

  readDataFromAPI() {
    this.http.get('https://perspektiv.id/musholla/api/api_sholat.php').subscribe((data) => {
      console.log(data);
      var isijadwal = JSON.parse(JSON.stringify(data));
      this.waktusholat = isijadwal.data.jadwal;
      console.log('cek this', this.waktusholat);
    }, (err) => {
      console.log(err);
    })
  }

}
