import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risalatuljamiah',
  templateUrl: './risalatuljamiah.page.html',
  styleUrls: ['./risalatuljamiah.page.scss'],
  template: '<pdf-viewer [src]="pdfSrc" [render-text]="true" [original-size]="false" style="width: 400px; height: 500px"></pdf-viewer>',
})
export class RisalatuljamiahPage implements OnInit {

  pdfSrc = "https://perspektiv.id/kitabpdf/risalatuljamiah.pdf";

  constructor() { }

  ngOnInit() {
  }

}
