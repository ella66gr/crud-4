import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { ViewBooksComponent } from './view-books/view-books.component';



@NgModule({
  declarations: [
    EditBooksComponent,
    ViewBooksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
