import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { of } from 'rxjs/``';
//const list = require('../../assets/data.json');
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getBoardData() {
    // const data = new Observable((observer) => {
    //   console.log(list);
    //   observer.next(list);
    // });
    
    return this.http.get('http://localhost:3000/');
     
  }

}
