import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@capacitor-community/http";
import { PdfViewerComponent } from "ng2-pdf-viewer";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  id_unique : any;
  nama : any;
  viewimage: any = {};
  linkImage: any = {};
  infohnya: any = {};
  // gambarnya: any = {};
  gambarnya : any[] = [];
  gambarnyakecuali : any[] = [];

  constructor(
    public _apiServices: ApiService,
    private route : ActivatedRoute,
    private router : Router,
    ) {
    // this.getKitab();
    this.route.params.subscribe((param:any) => {
      this.id_unique = param.id_unique;
      console.log(this.id_unique);
      this.getgallerydetail(this.id_unique);
      this.getGalleryinside();
      this.getgalleryexcept(this.id_unique);
    })
  }

  ngOnInit() {
  }

  getgallerydetail(id_unique) {
    this._apiServices.getgallerydetail(id_unique).subscribe((res: any) => {
      console.log('okey', res);
      this.viewimage = JSON.parse(JSON.stringify(res));
      var filesnyacoba = this.viewimage.nama;
      var infoh = this.viewimage.info;
      this.linkImage = 'https://perspektiv.id/musholla/gallery/' + filesnyacoba;
      this.infohnya = infoh;
      console.log('coba info', this.infohnya);
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

  getGalleryinside() {
    this._apiServices.getGallery().subscribe((res:any)=>{
      console.log('cek', res);
      this.gambarnya = res;
    },(error:any)=>{
      console.log('error',error);
    })
  }

  getgalleryexcept(id_unique) {
    this._apiServices.getgalleryexcept(id_unique).subscribe((res:any)=>{
      console.log('cek hasilnya ya', res);
      this.gambarnyakecuali = res;
    },(error:any)=>{
      console.log('error',error);
    })
  }

}
