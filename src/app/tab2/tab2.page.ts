import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  id_unique: any;
  nama: any;
  gambarnya : any = {};

  constructor(
    public _apiServices: ApiService,
    public http: HttpClient,
    ) {
    this.getGallery();
  }

  ionViewDidEnter(){
    this.getGallery();
  }

  ngOnInit() {
  }

  getGallery() {
    this._apiServices.getGallery().subscribe((res:any)=>{
      console.log('cek', res);
      this.gambarnya = res;
    },(error:any)=>{
      console.log('error',error);
    })
  }

}
