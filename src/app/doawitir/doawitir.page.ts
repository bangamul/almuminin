import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doawitir',
  templateUrl: './doawitir.page.html',
  styleUrls: ['./doawitir.page.scss'],
})
export class DoawitirPage implements OnInit {

  pdfSrc = "assets/kitabpdf/doawitir.pdf";

  constructor() { }

  ngOnInit() {
  }

}
