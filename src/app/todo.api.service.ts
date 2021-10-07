import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from "rxjs";
import { TodoModel } from './todo.model';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';

@Injectable()
export class TodoApiService {
    
    baseURL: string = "http://localhost:3000/";
    http: HttpClient;

    constructor(http: HttpClient) {
        this.http = http;    
    }

    getTodos() : Observable<TodoModel[]> {
        return this.http.get<TodoModel[]>(this.baseURL + "todo")
        //.pipe(catchError(this.errorHandler));
    }

    private errorHandler(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          console.error('An error occurred:', error.error.message);
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        // return an observable with a user-facing error message
        return throwError(
          'Something bad happened; please try again later.');
      }
}