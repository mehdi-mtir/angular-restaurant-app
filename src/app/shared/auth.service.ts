import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IAuthDTO } from './i-auth-dto';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  options = {headers : new HttpHeaders(
    {'content-type' : "application/json"}
  )}

  constructor(private http : HttpClient, private router : Router) { }

  login = (email1 : string, password1 : string)=>{
    this.http.post<IAuthDTO>("http://localhost:3000/login",
      {
        email : email1,
        password : password1
      },
      this.options
    ).subscribe(
      result => {
        console.log(result)
        window.localStorage.setItem('accessToken', result.accessToken)
        this.router.navigate(['/clients'])
      }
    )
  }

  logout = ()=>{
    window.localStorage.removeItem('accessToken')
  }

  isAuthenticated = () : Boolean=>{
    if(window.localStorage.getItem('accessToken'))
      return true
    else
      return false
  }
}
