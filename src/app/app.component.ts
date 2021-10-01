import { Component, OnInit } from '@angular/core';
import { TodoModel } from './todo-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ng-todolist-fe';
  status: boolean = false;
  todos: TodoModel[] = [];

  ngOnInit(): void {
    let json = '[{\"Id\":1,\"Description\":\"teszt1\",\"Completed\":false},{\"Id\":2,\"Description\":\"teszt2\",\"Completed\":false},{\"Id\":3,\"Description\":\"teszt43\",\"Completed\":false}]';
    this.todos = JSON.parse(json);
    console.log(JSON.stringify(this.todos))
  }

  setCompleted(todo: TodoModel) {
    todo.Completed = !todo.Completed;
    //TODO send to backend
  }

  remove(index: number) {
    this.todos.splice(index, 1);
  }
}

