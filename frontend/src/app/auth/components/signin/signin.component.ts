import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import {AuthService} from '@auth/services/auth.service'
import {Router} from '@angular/router'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  user:User={
    email:"",
    password:""
  }
  errores:any;
  constructor(private authServices: AuthService, private router :Router) { }

  ngOnInit(): void {
  }
   
  signin(data:NgForm){
     this.authServices.signin(data.value).subscribe(
       res=>{
         localStorage.setItem('token',res['token'])
         this.router.navigate(['/private'])
       },
       err=>{
         this.errores = err.error.message
       }
     )
  }
}
