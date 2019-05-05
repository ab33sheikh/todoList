import { Component, OnInit } from '@angular/core';
import {  DataService} from "../data.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
view=[];
  constructor(private data:DataService) {
    this.view=this.data.todos;
   }
   onDone(i){
     this.data.donetodo(i);
   }
   onRemove(i){
     this.data.removetodo(i);
   }
  ngOnInit() {
  }

}
