import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }

  domain:string = "http://a.itying.com/";




  get(api: string) {
    return new Promise((resolve, reject) => {
      this.http.get(this.domain + api).subscribe((response: any) => {
        resolve(response);
      })
    })
  }
}
