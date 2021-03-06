import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from 'src/app/Services/todo-service.service';
import {Todo} from "../../Model/todo";
import {faTrashAlt, faTrash} from "@fortawesome/free-solid-svg-icons"


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  faTrashAlt= faTrashAlt;
  fatrash= faTrash;
  todos: Todo[] = [];
  constructor(private todoService: TodoServiceService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe(res=>{
      if(res){
        this.todos=res;
      }
    })
  }

  /**
   * Changes todo status
   * @param todo 
   */
  changeTodoStatus(todo:Todo){
    this.todoService.changeStatus(todo);
  }

  /**
   * Deletes todos
   * @param todo 
   */
  deleteTodos(todo: Todo){
    this.todoService.deleteTodo(todo);
  }

  /**
   * Adds todos
   * @param todo 
   */
  addTodos(todo:Todo){
    this.todoService.addTodos(todo);
  }

}
