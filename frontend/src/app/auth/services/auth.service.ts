import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '@src/environments/environment';
import { User } from '../interfaces/user.interface';
import {Router} from "@angular/router"
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   url:string = environment.URI

  constructor(private http:HttpClient, private router:Router) { }

  signup(user:User){
    return this.http.post(`${this.url}/signup`,user)
  }

  signin(user:User){
    return this.http.post(`${this.url}/signin`,user)
  }

  profile(){
    return this.http.get(`${this.url}/profile`)

  }

  loggedIn():Boolean{
     return  !!localStorage.getItem('token')
  }


  logOut(){
     localStorage.removeItem('token')
     return this.router.navigate(['/signin'])
  }
}
