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
    })
  }

  ngOnInit() {
  }

  getgallerydetail(id_unique) {
    this._apiServices.getgallerydetail(id_unique).subscribe((res: any) => {
      console.log('okey', res);
      this.viewimage = JSON.parse(JSON.stringify(res));
      var filesnyacoba = this.viewimage.nama;
      this.linkImage = 'https://perspektiv.id/musholla/gallery/' + filesnyacoba;
      console.log('coba gambarnya', filesnyacoba);
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

}
