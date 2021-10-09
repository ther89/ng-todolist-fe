import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ResponseModel } from './models/response.model';
import { TodoApiService } from './todo.api.service';
import { TodoModel } from './models/todo.model';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent } from './snackbar/snackbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ng-todolist-fe';
  status: boolean = false;
  todos: TodoModel[] = [];
  errorText: string = '';
  addTodoDescription: string = '';

  constructor(
    private todoApiService: TodoApiService,  
    private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.todoApiService.getTodos()
      .subscribe((data: TodoModel[]) => {
        return this.todos =  [...data];
      },
      (err : HttpErrorResponse) => {
        this.showSnackbar(err.message);
      })
  }

  update(todo: TodoModel) {
    this.todoApiService.update(todo.id, !todo.completed)
      .subscribe((data: ResponseModel) => {
        if(data.success) {
          todo.completed = !todo.completed;  
        }
      },
      (err : HttpErrorResponse) => {
        this.showSnackbar(err.message);
      })
  }

  delete(id: number, index: number) {
    this.todoApiService.delete(id)
      .subscribe((data: ResponseModel) => {
        if(data.success) {
          this.todos.splice(index, 1);
        }
      },
      (err : HttpErrorResponse) => {
        this.showSnackbar(err.message);
      });
  }

  create() {
    if(this.addTodoDescription == null || this.addTodoDescription.trim() === '') {
      this.showSnackbar('Please write some stuff to do!');
      return;
    }  

    this.todoApiService.create(this.addTodoDescription)
      .subscribe((data: ResponseModel) => {
        if(data.success) {
          const todo : TodoModel = {
            id: parseInt(data.payload),
            description: this.addTodoDescription,
            completed: false,
          };
          this.todos.push(todo);
          this.addTodoDescription = "";    
        }
      },
      (err : HttpErrorResponse) => {
        this.errorText = err.message;
      })
  }

  private showSnackbar(message: string) {
    const config : MatSnackBarConfig = { 
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom', 
      data: message
    };

    this.snackbar.openFromComponent(SnackbarComponent, config);
  }
}

