// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-viewkitab',
//   templateUrl: './viewkitab.page.html',
//   styleUrls: ['./viewkitab.page.scss'],
// })
// export class ViewkitabPage implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@capacitor-community/http";
import { PdfViewerComponent } from "ng2-pdf-viewer";

@Component({
  selector: 'app-viewkitab',
  templateUrl: './viewkitab.page.html',
  styleUrls: ['./viewkitab.page.scss'],
  // template: '<pdf-viewer [src]="pdfSrc" [render-text]="true" [original-size]="false" style="width: 400px; height: 500px"></pdf-viewer>'
})
export class ViewkitabPage implements OnInit {

  id_unique : any;
  nama : any;
  pengarang : any;
  file : any;
  kitab : any = {};

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
      this.getKitabdetail(this.id_unique);
    })
  }

  ngOnInit() {
    // this.getKitab();
  }

  getKitabdetail(id_unique) {
    this._apiServices.getKitabdetail(id_unique).subscribe((res: any) => {
      console.log('okey', res);
      this.kitab = JSON.parse(JSON.stringify(res));
    }, (error: any) => {
      console.log('error', error);
      alert('gagal ambil data');
    })
  }

  // getKitab() {
  //   this._apiServices.getKitab().subscribe((res:any)=>{
  //     console.log('cek', res);
  //     this.kitab = res;
  //   },(error:any)=>{
  //     console.log('error',error);
  //   })
  // }

}
