import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-quran',
  templateUrl: './quran.page.html',
  styleUrls: ['./quran.page.scss'],
})
export class QuranPage implements OnInit {

  nama : any;
  namaLatin : any;
  jumlahAyat: any;
  tempatTurun: any;
  arti: any;
  nomor: any;
  deskripsi: any;
  audioFull: any;
  namasurat : any = {};

  constructor(
    public _apiServices: ApiService,
    public http: HttpClient,
    ) {
    this.readDataFromAPI();
  }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.readDataFromAPI();
  }

  readDataFromAPI() {
    this.http.get('https://perspektiv.id/musholla/api/api_quran.php').subscribe((data) => {
      console.log(data);
      var daftarayat = JSON.parse(JSON.stringify(data));
      this.namasurat = daftarayat.data;
      console.log('cek this', this.namasurat);
    }, (err) => {
      console.log(err);
    })
  }

}
