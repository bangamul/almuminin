import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@capacitor-community/http";
import { PdfViewerComponent } from "ng2-pdf-viewer";

@Component({
  selector: 'app-viewdoa',
  templateUrl: './viewdoa.page.html',
  styleUrls: ['./viewdoa.page.scss'],
})
export class ViewdoaPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  doa : any = {};

  // pdfSrc = "assets/kitabpdf/ratibalhaddad.pdf";
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";

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
      this.getDoadetail(this.id_unique);
    })
  }

  ngOnInit() {
    // this.getKitab();
  }

  getDoadetail(id_unique) {
    this._apiServices.getDoadetail(id_unique).subscribe((res: any) => {
      console.log('okey', res);
      this.doa = JSON.parse(JSON.stringify(res));
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

}
