import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  selectedUser: User = {
    fullName: '',
    email: '',
    password: '',
  };
  constructor(public http: HttpClient) {}
  postUser(user: User) {
    return this.http.post(environment.apiBaseUrl + '/register', user);
  }
}
