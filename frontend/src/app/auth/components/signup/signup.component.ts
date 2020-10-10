import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import {AuthService} from '@auth/services/auth.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = {
    email:"",
    password:""
  }
  errores:string;
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  signup(data:NgForm){
     this.authService.signup(data.value).subscribe(
       res=>{
        localStorage.setItem('token',JSON.stringify(res['token']))
        this.router.navigate(['/private'])
        // data.reset();
       },
       err=> this.errores=err.error.message
     )
  }

 
}
