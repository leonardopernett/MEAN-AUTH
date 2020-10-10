import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from '@src/environments/environment';
import { Task } from '@auth/interfaces/tasks.interface';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  URL= environment.URI

  constructor(private http:HttpClient) { }

    getPrivateTask(){
      return  this.http.get<Task[]>(`${this.URL}/private-tasks`)
    }

    getTasks(){
      return  this.http.get<Task[]>(`${this.URL}/tasks`)
    }
}
