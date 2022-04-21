import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Farm } from './farm';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {
    //console.log('hola mundo');
  }

  data() {
     this.http.get<Farm>('./mock-data.json').subscribe((resp: Farm) => {
      console.log(resp);
    });
  }
}
