import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewBooksComponent } from './view-books/view-books.component';
import { EditBooksComponent } from './edit-books/edit-books.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBooksComponent,
    EditBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
