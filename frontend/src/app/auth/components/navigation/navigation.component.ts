import { Component, OnInit } from '@angular/core';
import {AuthService} from '@auth/services/auth.service'
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html'

})
export class NavigationComponent implements OnInit {
  email:string ;
  constructor(private authoServices :AuthService ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')){
       this.authoServices.profile().subscribe(
         res=>{
           this.email= res['email']
         },
         err=>console.log(err)
       )
    }
  }


  logout(){
    return this.authoServices.logOut()
  }

  loggedIn(){
    if(localStorage.getItem('token')){
      return true
    }
  }

}
