import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@capacitor-community/http";
import { PdfViewerComponent } from "ng2-pdf-viewer";

@Component({
  selector: 'app-viewsholawat',
  templateUrl: './viewsholawat.page.html',
  styleUrls: ['./viewsholawat.page.scss'],
})
export class ViewsholawatPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  sholawat : any = {};
  pdfSrc: any = {};


  constructor(
    public pdfViewerComponent: PdfViewerComponent,
    public _apiServices: ApiService,
    private route : ActivatedRoute,
    private router : Router,
    ) {
    // this.getKitab();
    this.route.params.subscribe((param:any) => {
      this.id_unique = param.id_unique;
      console.log(this.id_unique);
      this.getsholawatdetail(this.id_unique);
    })
  }

  ngOnInit() {
  }

  getsholawatdetail(id_unique) {
    this._apiServices.getsholawatdetail(id_unique).subscribe((res: any) => {
      console.log('okey', res);
      this.sholawat = JSON.parse(JSON.stringify(res));
      var filesnyacoba = this.sholawat.file;
      this.pdfSrc = 'https://perspektiv.id/musholla/kitabpdf/' + filesnyacoba;
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

}
