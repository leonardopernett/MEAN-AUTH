import { Component, OnInit } from '@angular/core';
import {TaskService} from '@auth/services/task.service'
import { Task } from '../../interfaces/tasks.interface';
@Component({
  selector: 'app-private-tasks',
  templateUrl: './private-tasks.component.html',
  styleUrls: ['./private-tasks.component.scss']
})
export class PrivateTasksComponent implements OnInit {
  tasks:Task[] =[]
  constructor(private taskService : TaskService) { }

  ngOnInit(): void {

     if(localStorage.getItem('token')){
       this.taskService.getPrivateTask().subscribe(
         res=>{
           this.tasks=res
           console.log(res)
         }, 
         err=>console.log(err)
       )
     }
  }



}
