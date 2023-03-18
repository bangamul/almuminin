import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratibhaddad',
  templateUrl: './ratibhaddad.page.html',
  styleUrls: ['./ratibhaddad.page.scss'],
  template: '<pdf-viewer [src]="pdfSrc" [render-text]="true" [original-size]="false" style="width: 400px; height: 500px"></pdf-viewer>',
})
export class RatibhaddadPage implements OnInit {

  pdfSrc = "https://perspektiv.id/kitabpdf/ratibalhaddad.pdf";

  constructor() { }

  ngOnInit() {
  }

}
