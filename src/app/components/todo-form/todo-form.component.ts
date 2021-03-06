import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Model/todo";
import * as uuid from 'uuid';

import { TodoServiceService } from 'src/app/Services/todo-service.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  todoTitle: any;

  constructor(private todoService:TodoServiceService) { }

  ngOnInit(): void {
  }

  handleAddTodos(){
    const newTodo: Todo= {
      id: uuid.v4(),
      title: this.todoTitle,
      data: new Date(),
      isComplete: false
    };

    this.todoService.addTodos(newTodo);
    this.todoTitle="";
  }

}
