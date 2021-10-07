import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoApiService } from './todo.api.service';
import { TodoModel } from './todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ng-todolist-fe';
  status: boolean = false;
  todos: TodoModel[] = [];
  todoApiService: TodoApiService;
  errorText = '';

  constructor(todoApiService: TodoApiService) {
    this.todoApiService = todoApiService;
  }

  ngOnInit(): void {
    this.todoApiService.getTodos()
      .subscribe((data: TodoModel[]) => {
        return this.todos =  [...data];
      },
      (err : HttpErrorResponse) => {
        this.errorText = err.message;
      })
  }

  setCompleted(todo: TodoModel) {
    todo.completed = !todo.completed;
    //TODO send to backend
  }

  remove(index: number) {
    this.todos.splice(index, 1);
  }

  add(description: string) {
    const todo : TodoModel = {
      id: 0,
      description: description,
      completed: false,
    };
    this.todos.push(todo);

    //send to backend
  }
}

