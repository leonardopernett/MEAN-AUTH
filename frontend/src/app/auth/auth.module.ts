import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//modules
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
//components
import { SignupComponent } from './components/signup/signup.component';
import { SigninComponent } from './components/signin/signin.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { PrivateTasksComponent } from './components/private-tasks/private-tasks.component';
import { NavigationComponent } from './components/navigation/navigation.component'

import {TokenInterceptorService} from '@auth/services/token-interceptor.service'

@NgModule({
  declarations: [SignupComponent, SigninComponent, TasksComponent, PrivateTasksComponent, NavigationComponent],
  imports: [
    CommonModule,RouterModule,FormsModule,HttpClientModule
  ],
  providers:[
     {
       provide:HTTP_INTERCEPTORS,
       useClass:TokenInterceptorService,
       multi:true
     }
  ],
  exports:[SignupComponent, SigninComponent, TasksComponent, PrivateTasksComponent,NavigationComponent]
})
export class AuthModule { }
