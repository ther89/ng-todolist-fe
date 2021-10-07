import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoApiService } from './todo.api.service';
import { SnackbarComponent } from './snackbar/snackbar/snackbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SnackbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [TodoApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
