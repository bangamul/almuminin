import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ratibalthos',
  templateUrl: './ratibalthos.page.html',
  styleUrls: ['./ratibalthos.page.scss'],
})
export class RatibalthosPage implements OnInit {

  pdfSrc = "assets/kitabpdf/ratibalathos.pdf";

  constructor() { }

  ngOnInit() {
  }

}
