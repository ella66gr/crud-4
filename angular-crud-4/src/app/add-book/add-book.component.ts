import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { nanoid } from 'nanoid';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
})
export class AddBookComponent implements OnInit {
  newBook: Book = { id: '', title: '', author: '' }; // this is the book that will be added
  ellaBooks$: Observable<Book[]>; // this is the list of books
  @Input() bookUpdated!: EventEmitter<void>;
  successMessage = ''; // this is the success message to be displayed if the book is added successfully

  constructor(private bookService: BookService) { // inject the book service into the constructor

    this.ellaBooks$ = this.bookService.books$; // get the list of books
  }

  ngOnInit(): void { // this method is called when the component is initialized
    this.bookUpdated.subscribe(() => {
      // Code to refresh the book list goes here
    });

  }

  onAddBook(): void {
    if (this.newBook.title && this.newBook.author) {
      this.newBook.id = nanoid(5);
      this.bookService.addBook({ // add the new book to the list of books using the book service addBook method 
        ...this.newBook, // spread operator that copies the properties of the newBook object

      }).subscribe(() => { // subscribe to the observable returned by the addBook method
        this.newBook = { id: '', title: '', author: '' }; // reset the form
        this.ellaBooks$ = this.bookService.books$; // update the list of books
        this.successMessage = 'Book added successfully!';
      });
    }
  }

}

// Note ellaBooks is just a made up variable name. You can use whatever variable name you want. The important thing is that you call the `getBooks` method from the book service to get the list of books. Then you can use the `addBook` method from the book service to add the new book to the list of books. Finally, you can reset the form by setting the `newBook` variable to an empty object. */



