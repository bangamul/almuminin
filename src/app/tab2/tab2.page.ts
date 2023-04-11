import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

import { ViewerModalComponent } from 'ngx-ionic-image-viewer';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  id_unique: any;
  nama: any;
  // gambarnya : any = {};
  gambarnya : any[] = [];

  slideOptsOne : any = {};

  constructor(
    public _apiServices: ApiService,
    public http: HttpClient,
    public modalController: ModalController,
    ) {
    this.getGallery();
  }

  async openImage(img) {
    const modal = await this.modalController.create({
      component: ViewerModalComponent,
      componentProps: {
        src: img
      },
      cssClass: 'ion-img-viewer',
      keyboardClose: true,
      showBackdrop: true
    }); 
    return await modal.present();
  }

  async ionViewWillEnter(){
    this.optionSlider()
  }

  optionSlider(){
    this.slideOptsOne = {
      initialSlide: 0,
      slidesPerView: 1,
      autoplay:true,
      speed: 1000
    };
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
