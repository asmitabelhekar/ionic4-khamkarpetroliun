import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoaderserviceService {

  constructor(public http : HttpClient) { }


public get(url){
  const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })
  }
  return this.http.get(url,httpOptions);
}

}
