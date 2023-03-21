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

  getPerhari(){
    return this.http.get(this.apiURL()+'/perhari.php');
  }

}
