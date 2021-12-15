import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductServiceService {
  constructor(public http: HttpClient) {}
  getData() {
    let url = environment.apiUrl;
    return this.http.get(url);
  }
}
