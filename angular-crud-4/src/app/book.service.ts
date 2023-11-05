import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import the HttpClient. This could be Http instead. It could also have been imported inot the app.module.ts file instead of here, where it would have been available to all components.
import { Observable, BehaviorSubject } from 'rxjs';
import { Book } from './book.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = 'http://localhost:3004/books'; // replace with your API URL if this is different

  constructor(private http: HttpClient) { } // inject the HttpClient into the constructor

  private booksSubject = new BehaviorSubject<Book[]>([]);
  books$ = this.booksSubject.asObservable();

  getBooks(): void {
    this.http.get<Book[]>(this.apiUrl).subscribe(books => {
      this.booksSubject.next(books);
    });
  }

  getBook(id: string): Observable<Book> { // the return type is an Observable of a Book.
    const url = `${this.apiUrl}/${id}`; // the URL is constructed using the ID passed in.
    return this.http.get<Book>(url); // the return type is an Observable of a Book.
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.apiUrl, book).pipe(
      tap(() => {
        this.getBooks();
      })
    );
  }

  updateBook(id: string, updatedBook: Book): Observable<Book> { // the return type is an Observable of a Book.
    const url = `${this.apiUrl}/${id}`; // the URL is constructed using the ID passed in.
    return this.http.put<Book>(url, updatedBook).pipe( // the return type is an Observable of a Book.
      tap(() => {
        this.getBooks();
        // updateBook uses the pipe method to call getBooks after the book is updated. This will cause the books$ Observable to emit a new value, which will update the book list in list-books.component.html.
      })
    );
  }

  deleteBook(id: string): Observable<{}> { // the return type is an Observable of an empty object.
    const url = `${this.apiUrl}/${id}`; // the URL is constructed using the ID passed in.
    return this.http.delete(url).pipe( // the return type is an Observable of an empty object.
      tap(() => { // the tap operator is used to call getBooks after the book is deleted. This will cause the books$ Observable to emit a new value, which will update the book list in list-books.component.html.
        this.getBooks();
      })
    );
  }

}

// ** deleteBook method explanation **:
/* 1. deleteBook(id: number): Observable<{}> {: This line is declaring a method named deleteBook that takes one parameter, id, which is a number. The method returns an Observable that emits an empty object. The Observable is a core concept in the library RxJS, which is used heavily in Angular for handling asynchronous operations.

2. const url = ${ this.apiUrl }/${id};: This line is creating a constant named url and assigning it the value of this.apiUrl (the base URL of your API) concatenated with the id of the book you want to delete. This constructs the full URL to make the DELETE request to.

3. return this.http.delete(url).pipe(: This line is making a DELETE request to the URL you constructed.The delete method returns an Observable.The pipe method is used to chain operators(in this case, tap) to the Observable.

4.   tap(() => {: The tap operator is used to perform side effects.In this case, it's used to call the getBooks method after the DELETE request is made. The tap operator does not modify the values of the Observable stream.

5.   this.getBooks();: This line is calling the getBooks method, which makes a GET request to your API to get the updated list of books after one has been deleted.

6. }): This line is closing the tap operator.

7. );: This line is closing the pipe method and the deleteBook method.

  So, in summary, this method makes a DELETE request to your API to delete a book, and then it refreshes the list of books. */