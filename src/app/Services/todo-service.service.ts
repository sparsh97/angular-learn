import { Injectable } from '@angular/core';
import {of} from "rxjs";
import {Todo} from "../Model/todo";

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  todos: Todo[];
  constructor() { 
    this.todos=[{
      id: '111',
      title: "hi",
      isComplete: true,
      data: new Date()
    },
  {
      id: '112',
      title: "hii....",
      isComplete: true,
      data: new Date()
    },
  {
      id: '113',
      title: "hiii",
      isComplete: false,
      data: new Date()
    },
  {
      id: '114',
      title: "hiiii",
      isComplete: false,
      data: new Date()
    }]
  }

  /**
   * Gets todos
   * @returns  
   */
  getTodos(){
    return of(this.todos);
  }

  /**
   * Adds todos
   * @param todo 
   */
  addTodos(todo: Todo){
    this.todos.push(todo);
  }

  /**
   * Changes status
   * @param todo 
   */
  changeStatus(todo: Todo){
    this.todos.map(x=>{
      if(x.id === todo.id){
        todo.isComplete=!todo.isComplete;
      }
    });
  }

  /**
   * Deletes todo
   * @param toto 
   */
  deleteTodo(toto:Todo){
    const index= this.todos.findIndex(y=> y.id === toto.id);
    this.todos.splice(index,1);
  }
}
