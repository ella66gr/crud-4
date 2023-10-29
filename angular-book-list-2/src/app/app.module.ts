import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { ViewBooksComponent } from './view-books/view-books.component';

@NgModule({
  declarations: [
    AppComponent,
    EditBooksComponent,
    ViewBooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
