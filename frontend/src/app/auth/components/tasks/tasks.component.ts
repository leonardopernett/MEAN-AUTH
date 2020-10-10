import { Component, OnInit } from '@angular/core';
import { Task } from '@auth/interfaces/tasks.interface';
import {TaskService} from '@auth/services/task.service'
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
   tasks:Task[]=[]

  constructor(private  taskservices:TaskService) { }

  ngOnInit(): void {
     this.taskservices.getTasks().subscribe(
       res=>{
         this.tasks = res
       },
       err=>console.log(err)
     )
  }

}
