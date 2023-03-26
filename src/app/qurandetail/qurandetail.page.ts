import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Http } from "@capacitor-community/http";

@Component({
  selector: 'app-qurandetail',
  templateUrl: './qurandetail.page.html',
  styleUrls: ['./qurandetail.page.scss'],
})
export class QurandetailPage implements OnInit {

  nama : any;
  namaLatin : any;
  jumlahAyat: any;
  tempatTurun: any;
  arti: any;
  nomor: any;
  deskripsi: any;
  audioFull: any;
  
  nomorAyat : any;
  teksArab: any;
  teksLatin: any;
  teksIndonesia: any;
  // isisurat : any = {};
  isisurat : any = {};
  konten : any[] = [];

  constructor(
    public _apiServices: ApiService,
    private route : ActivatedRoute,
    private router : Router,
    ) {
    // this.getKitab();
    this.route.params.subscribe((param:any) => {
      this.nomor = param.nomor;
      console.log(this.nomor);
      this.getListsurat(this.nomor);
    })
  }

  ngOnInit() {
  }

  // getListsurat(nomor) {
  //   this._apiServices.getListsurat(nomor).subscribe((res: any) => {
  //     console.log('okey', res);
  //     this.isisurat = JSON.parse(JSON.stringify(res));
  //     var filesnyacoba = this.isisurat.data.ayat;
  //     // this.pdfSrc = 'https://perspektiv.id/musholla/kitabpdf/' + filesnyacoba + '.pdf';
  //     console.log("isi surat:", filesnyacoba);
  //   }, (error: any) => {
  //     console.log('error', error);
  //     alert('gagal ambil data');
  //   })
  // }

  getListsurat(nomor) {
    this._apiServices.getListsurat(nomor).subscribe((res: any) => {
      console.log('cek', res);
      // this.isisurat = res;
      var isisurat = res;
      this.konten = isisurat.data.ayat;
      // var isisurat = JSON.parse(JSON.stringify(res));
      // this.namasurat = isisurat.res;
      console.log('cek this', this.konten);
    }, (err) => {
      console.log(err);
    })
  }

}
