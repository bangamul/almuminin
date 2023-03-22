import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@capacitor-community/http";
import { PdfViewerComponent } from "ng2-pdf-viewer";

@Component({
  selector: 'app-viewmaulid',
  templateUrl: './viewmaulid.page.html',
  styleUrls: ['./viewmaulid.page.scss'],
})
export class ViewmaulidPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  maulid : any = {};

  
  pdfSrc = "https://perspektiv.id/musholla/kitabpdf/ratibalhaddad.pdf";

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
      this.getmauliddetail(this.id_unique);
    })
  }

  ngOnInit() {
  }

  getmauliddetail(id_unique) {
    this._apiServices.getmauliddetail(id_unique).subscribe((res: any) => {
      console.log('okey', res);
      this.maulid = JSON.parse(JSON.stringify(res));
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

}
