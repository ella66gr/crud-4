import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';
import { Book } from '../book.model';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',

})
export class ListBooksComponent implements OnInit {
  ellaBooks$: Observable<Book[]>; // this is the list of books
  // bookUpdated = new EventEmitter<void>(); // this is the event that will be emitted when a book is updated
  @Input() bookUpdated!: EventEmitter<void>;

  constructor(private bookService: BookService) { // inject the book service into the constructor
    this.ellaBooks$ = this.bookService.books$; // get the list of books to initialize the ellaBooks$ variable
  }

  ngOnInit(): void { // this method is called when the component is initialized
    this.bookService.getBooks(); // gets the list when the component is initialized
    this.ellaBooks$ = this.bookService.books$; // updates the list when the component is initialized
    this.bookUpdated.subscribe(() => { // subscribes to the bookUpdated event
      this.ellaBooks$ = this.bookService.books$; // refreshes the list of books when the bookUpdated event is emitted
    });
  }
}