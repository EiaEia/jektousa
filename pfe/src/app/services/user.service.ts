import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) { }


  // user: {firstName, lastName, tel, email, pwd}
  signup(userData:any) {
    return this.http.post('http://localhost:3000/api/v1/users/create', userData)
  }
}
