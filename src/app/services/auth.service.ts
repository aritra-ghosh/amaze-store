import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.URL;
  }

  isAuthenticated() {
    let loggedIn = false;
    if (sessionStorage && sessionStorage.getItem('loggedIn')) {
      loggedIn = Boolean(sessionStorage.getItem('loggedIn'));
    }
    return loggedIn;
  }

  authUser(loginData: any) {
    const URL = this.apiUrl + 'admin-login';
    return this.http.post(URL, loginData);
  }
}
