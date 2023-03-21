import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doatarawih',
  templateUrl: './doatarawih.page.html',
  styleUrls: ['./doatarawih.page.scss'],
})
export class DoatarawihPage implements OnInit {

  pdfSrc = "assets/kitabpdf/doatarawih.pdf";

  constructor() { }

  ngOnInit() {
  }

}
