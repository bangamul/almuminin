import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-jadwaltarawih',
  templateUrl: './jadwaltarawih.page.html',
  styleUrls: ['./jadwaltarawih.page.scss'],
})
export class JadwaltarawihPage implements OnInit {

  imam : any;
  bilal : any;
  jadwal : any;
  tanggalhijriah : any;
  tarawih : any[] = [];

  constructor(
    public _apiServices: ApiService,
    ) {
    this.getImam();
  }

  ngOnInit() {
    this.getImam();
  }

  getImam() {
    this._apiServices.getImam().subscribe((res:any)=>{
      console.log('cek', res);
      this.tarawih = res;
    },(error:any)=>{
      console.log('error',error);
    })
  }

}
