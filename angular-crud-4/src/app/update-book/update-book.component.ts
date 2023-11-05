// update-book.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
})

export class UpdateBookComponent {
  bookId: string; // this is the ID of the book to be updated
  book: Book = new Book('', '', ''); // this reflects my book model. The first argument is required to be a number, the second and third arguments are required to be strings.
  successMessage = ''; // this is the success message to be displayed if the book is updated successfully

  bookErrorMessage: string; // this is the error message to be displayed if the book is not found
  ellaBooks$: Observable<Book[]>; // this is the list of books

  constructor(private bookService: BookService) { // inject the book service into the constructor
    this.bookId = ''; // initialize the bookId
    this.bookErrorMessage = ''; // initialize the errorMessage to an empty string
    this.ellaBooks$ = this.bookService.books$; // get the list of books
  }

  ngOnInit(): void {
    this.successMessage = '';
  }

  @Output() bookUpdated = new EventEmitter<void>();


  updateBook() {
    this.bookErrorMessage = '';

    // Check if the book title and author are set.
    if (!this.book.title || !this.book.author) {
      this.bookErrorMessage = 'Both title and author are required.';
      return;
    }

    // Call the book service to get the book with the given ID.
    this.bookService.getBook(this.bookId).subscribe((book) => { // The getBook method returns an Observable. In Angular, observables are a way to handle asynchronous operations, like HTTP requests. By subscribing to the observable, you're saying, "Once the asynchronous operation is complete and the book data is available, execute this function."
      // (book) => {...}: This is the function that gets executed once the observable resolves. It receives the resolved value, which in this context is the book data fetched by getBook.
      // If the book is not found, display an error message to the user.
      if (!book) {
        this.bookErrorMessage = `Book with ID ${this.bookId} not found.`;
        return;
      }

      // Update the book's title and author.
      book.title = this.book.title;
      book.author = this.book.author;

      // Call the book service to update the book on the data store
      this.bookService.updateBook(book.id, book).subscribe({
        next: () => {
          this.book.title = '';
          this.book.author = '';
          this.bookId = '';
          this.bookUpdated.emit();
          this.successMessage = 'Book updated successfully!';
        },
        error: () => {
          this.bookErrorMessage = 'Error updating book.';
        }
      });

    });
  }
} // this closes the UpdateBookComponent class

