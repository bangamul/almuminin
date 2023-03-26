import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
  ) {

  }

  // link API
  apiURL(){
    return "https://perspektiv.id/musholla/api";
  }

  getImam(){
    return this.http.get(this.apiURL()+'/tampil.php');
  }

  getGallery(){
    return this.http.get(this.apiURL()+'/getgallery.php');
  }

  getPerhari(){
    return this.http.get(this.apiURL()+'/perhari.php');
  }

  getRatib(){
    return this.http.get(this.apiURL()+'/ratib.php');
  }

  getMaulid(){
    return this.http.get(this.apiURL()+'/maulid.php');
  }

  getDoa(){
    return this.http.get(this.apiURL()+'/doa.php');
  }

  getKitab(){
    return this.http.get(this.apiURL()+'/kitab.php');
  }

  getSholawat(){
    return this.http.get(this.apiURL()+'/sholawat.php');
  }

  getKitabdetail(id) {
    return this.http.get(this.apiURL() + '/getkitab.php?id_unique=' + id);
  }

  getRatibdetail(id) {
    return this.http.get(this.apiURL() + '/getratib.php?id_unique=' + id);
  }

  getDoadetail(id) {
    return this.http.get(this.apiURL() + '/getdoa.php?id_unique=' + id);
  }

  getmauliddetail(id) {
    return this.http.get(this.apiURL() + '/getmaulid.php?id_unique=' + id);
  }

  getsholawatdetail(id) {
    return this.http.get(this.apiURL() + '/getsholawat.php?id_unique=' + id);
  }

  getgallerydetail(id) {
    return this.http.get(this.apiURL() + '/getgallerydetail.php?id_unique=' + id);
  }

  getJadwalsholat(){
    return this.http.get(this.apiURL()+'/api_sholat.php');
  }

  getListquran(){
    return this.http.get(this.apiURL()+'/api_quran.php');
  }

  apiquranURL(){
    return "https://equran.id/api/v2/surat";
  }

  getListsurat(id){
    return this.http.get(this.apiquranURL()+'/' + id);
  }

}
