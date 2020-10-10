import { NgModule }                from '@angular/core';
import { Routes, RouterModule }    from '@angular/router';

//components
import { PrivateTasksComponent }   from '@auth/components/private-tasks/private-tasks.component';
import { TasksComponent }          from '@auth/components/tasks/tasks.component';
import { SignupComponent }         from '@auth/components/signup/signup.component';
import { SigninComponent }         from '@auth/components/signin/signin.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"", redirectTo:"/tasks",pathMatch:"full"},
  {path:"tasks", component:TasksComponent},
  {path:"private", component:PrivateTasksComponent, canActivate:[AuthGuard]},
  {path:"signup", component:SignupComponent},
  {path:"signin", component:SigninComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
