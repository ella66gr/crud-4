import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model'; // import the Book interface
import { BookService } from '../book.service'; // import the BookService

@Component({
  selector: 'app-edit-books',
  templateUrl: './edit-books.component.html',
  styleUrls: ['./edit-books.component.css']
})
  
export class EditBooksComponent implements OnInit {
  sampleBook: Book; // declare a variable of type Book
  readingList: Book[] = []; // declare a variable of type Book array

  constructor(private bookService: BookService) { // inject the BookService into the constructor
    this.sampleBook = { // initialize the property in the constructor
      id: 1,
      title: 'A Good Book',
      author: '',
      publicationYear: 0,
      type: 'Non-Fiction', // Cannot be initialised with a null value
      summary: ''
    };
    
  }
  
  ngOnInit(): void { // this is a lifecycle hook. Angular calls ngOnInit() shortly after creating a component. It's a good place to put initialization logic.
    this.sampleBook = this.bookService.getSampleBook(); // call the getSampleBook() method of the BookService and assign the result to the sampleBook property
    this.readingList = this.bookService.getBooks(); // the getBooks method was defined in the BookService to return the array of books
  }
}
