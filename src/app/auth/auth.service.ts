import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import { UserData } from './auth';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: string = '';
  private apiUrlPost= 'http://localhost:8081/api/v1'

  constructor(
    private http: HttpClient,
    private router: Router
    ) { }


  postData(UserData: any) :Observable<any>{
    console.log(UserData)
  return this.http.post<any>(`${this.apiUrlPost}/register`,UserData);
}    

login(email: string, password: string) {
  const param :HttpParams = new HttpParams().set('email',email).set('password',password)
  const requestBody = { email, password };
  return this.http.post(`${this.apiUrlPost}/login`, requestBody);
}
    
   findAll() {
    debugger;
    return this.http.get<UserData[]>(this.apiUrlPost +'/getsallUsers');
  }
  
}
