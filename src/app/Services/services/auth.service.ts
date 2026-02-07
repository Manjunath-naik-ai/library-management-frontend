import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public http: HttpClient) {}

  login(data: any) {
    console.log('AuthService login called with data:', data);
    return this.http.post('https://localhost:7226/api/Auth/login', data);
  }
}
