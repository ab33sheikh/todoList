import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validator, Validators} from '@angular/forms';
import { log } from 'util';
import {  DataService} from "../data.service";
@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
todoform:FormGroup;
  constructor(private formbuilder:FormBuilder,private data:DataService) {
    this.todoform=this.formbuilder.group({
      todo:['',Validators.required]
    })
   }
   onSubmit(){
  this.data.addTodo(this.todoform.value.todo);     
 // this.todoform.value.todo='';
   }
  ngOnInit() {
  }

}
