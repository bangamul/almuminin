import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@capacitor-community/http";
import { PdfViewerComponent } from "ng2-pdf-viewer";

@Component({
  selector: 'app-viewratib',
  templateUrl: './viewratib.page.html',
  styleUrls: ['./viewratib.page.scss'],
})
export class ViewratibPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  ratib : any = {};

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
      this.getRatibdetail(this.id_unique);
    })
  }

  ngOnInit() {
  }

  getRatibdetail(id_unique) {
    this._apiServices.getRatibdetail(id_unique).subscribe((res: any) => {
      console.log('okey', res);
      this.ratib = JSON.parse(JSON.stringify(res));
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

}
