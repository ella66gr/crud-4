import { NgModule } from '@angular/core'; // import the NgModule decorator. This lets me define this module, but doesn't by itself give access to all the features of Angular
import { CommonModule } from '@angular/common'; // import the CommonModule
import { ViewBooksComponent } from './view-books/view-books.component'; // import the ViewBooksComponent from the view-books folder because we are going to use it in this module
import { BookService } from './book.service'; // import the BookService from the book.service.ts file because we are going to use it in this module
import { FormsModule } from '@angular/forms'; // import the FormsModule because we are going to use it in this module. This becomes available to all components in this module.
import { EditBooksComponent } from './edit-books/edit-books.component';


@NgModule({ // this is a decorator function that takes a single metadata object whose properties describe the module. The most important property is declarations, which is an array of the components, directives, and pipes that belong to this module.
  declarations: [ // the view classes that belong to this module. Angular has three kinds of view classes: components, directives, and pipes.
    ViewBooksComponent,
    EditBooksComponent
  ],
  imports: [ 
    CommonModule,
    FormsModule
  ],
  providers: [ // services provided at the module level
    BookService
  ],
  
})
export class BookModule { }

//Original code
/* import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class BookModule { }
*/