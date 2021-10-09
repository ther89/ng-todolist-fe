import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { TodoModel } from './models/todo.model';
import { ResponseModel } from './models/response.model';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoApiService {
    baseURL: string = "http://localhost:3010";
    http: HttpClient;

    constructor(http: HttpClient) {
      this.http = http;    
    }

    getTodos() : Observable<TodoModel[]> {
      return this.http.get<TodoModel[]>(`${this.baseURL}/todo`);
    }

    update(id: number, completed: boolean) : Observable<ResponseModel> {
      return this.http.put<ResponseModel>(`${this.baseURL}/todo/${id}`, { completed: completed })
    }

    create(description: string) : Observable<ResponseModel> {
      return this.http.post<ResponseModel>(`${this.baseURL}/todo`, { description: description })
    }

    delete(id: number) {
      return this.http.delete<ResponseModel>(`${this.baseURL}/todo/${id}`)
    }
}