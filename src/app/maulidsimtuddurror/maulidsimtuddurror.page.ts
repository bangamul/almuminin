import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maulidsimtuddurror',
  templateUrl: './maulidsimtuddurror.page.html',
  styleUrls: ['./maulidsimtuddurror.page.scss'],
  template: '<pdf-viewer [src]="pdfSrc" [render-text]="true" [original-size]="false" style="width: 400px; height: 500px"></pdf-viewer>',
})
export class MaulidsimtuddurrorPage implements OnInit {

  pdfSrc = "https://perspektiv.id/kitabpdf/maulid-simtudduror.pdf";

  constructor() { }

  ngOnInit() {
  }

}
