import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model'; // import the Book interface
import { BookService } from '../book.service'; // import the BookServic

@Component({
  selector: 'app-view-books',
  templateUrl: './view-books.component.html',
  styleUrls: ['./view-books.component.css']
})

export class ViewBooksComponent implements OnInit {
  sampleBook: Book;
  someBooks: Book[] = []; // declare a variable of type Book array
  
  constructor(private bookService: BookService) {
    this.sampleBook = { // initialize the property in the constructor
      id: 1,
      title: '',
      author: '',
      publicationYear: 0,
      type: 'Fiction', // Cannot be initialised with a null value
      summary: ''
    };
  }
  
  ngOnInit(): void { // this is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
    this.sampleBook = this.bookService.getSampleBook(); // call the getSampleBook() method of the BookService and assign the result to the sampleBook property
    this.someBooks = this.bookService.getBooks(); // the getBooks method was defined in the BookService to return the array of books
  }
}
