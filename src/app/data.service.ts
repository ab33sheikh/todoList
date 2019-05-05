import { Injectable } from '@angular/core';
import { TodoListComponent } from './todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos=[];
  dones=[];

  constructor() { }
  addTodo(todo){
    this.todos.push(todo);
  }
  donetodo(i){
    this.dones.push(this.todos[i]);
    this.todos.splice(i,1);
  }
  removetodo(i){
    this.todos.splice(i,1);
  }
  remmovedone(i){
    this.dones.splice(i,1);
  }
}
