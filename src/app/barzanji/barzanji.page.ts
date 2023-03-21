import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barzanji',
  templateUrl: './barzanji.page.html',
  styleUrls: ['./barzanji.page.scss'],
})
export class BarzanjiPage implements OnInit {

  pdfSrc = "assets/kitabpdf/maulidalbarjanzi.pdf";

  constructor() { }

  ngOnInit() {
  }

}
