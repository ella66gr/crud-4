import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent {
  bookId: string; // this is the ID of the book to be updated

  deleteSuccessMessage = ''; // this is the success message to be displayed if the book is updated successfully

  bookErrorMessage: string; // this is the error message to be displayed if the book is not found
  ellaBooks$: Observable<Book[]>; // this is the list of books

  constructor(private bookService: BookService) { // inject the book service into the constructor
    this.bookId = ''; // initialize the bookId    this.bookErrorMessage = ''; // initialize the errorMessage to an empty string
    this.ellaBooks$ = this.bookService.books$; // get the list of books
    this.bookErrorMessage = '';
  }
  ngOnInit(): void {
    this.deleteSuccessMessage = '';
  }
  @Output() bookUpdated = new EventEmitter<void>();

  deleteBook() {
    this.bookErrorMessage = '';

    this.bookService.deleteBook(this.bookId).subscribe({
      next: () => {
        this.deleteSuccessMessage = 'Book deleted successfully';
        this.bookId = ''; // reset the bookId
        // this.book = { id: '', title: '', author: '' }; // reset the form
        this.bookUpdated.emit();
      },
      error: () => {
        this.bookErrorMessage = 'An error occurred while deleting the book';
      }
    });
  }

}