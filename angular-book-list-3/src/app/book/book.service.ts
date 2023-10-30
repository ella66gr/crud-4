import { Injectable } from '@angular/core';
import { Book } from './book.model'; // import the Book interface

@Injectable({
  providedIn: 'root'
})
export class BookService { // this is a service class
  private bookList: Book[] = [ // This is a private array of books
    {
      id: 1,
      author: 'Malcolm Gladwell',
      title: 'Outliers',
      publicationYear: 2008,
      type: 'Non-Fiction',
      summary: 'A book about success and how to achieve it.'
    },
    {
      id: 2,
      author: 'J D Salinger',
      title: 'The Catcher in the Rye',
      publicationYear: 1951,
      type: 'Fiction',
      summary: 'A book about a teenager who is upset.',
    },
    {
      id: 3,
      author: 'George Orwell',
      title: '1984',
      publicationYear: 1949,
      type: 'Fiction',
      summary: 'A book about a dystopian future.'
    },
    {
      id: 4,
      author: 'George Orwell',
      title: 'Animal Farm',
      publicationYear: 1945,
      type: 'Fiction',
      summary: 'A book about a farm where the animals take over.'
    },
    {
      id: 5,
      author: 'Stephen Hawking',
      title: 'A Brief History of Time',
      publicationYear: 1988,
      type: 'Non-Fiction',
      summary: 'A book about the universe.'
    },
    {
      id: 6,
      author: 'Stephen Hawking',
      title: 'The Universe in a Nutshell',
      publicationYear: 2001,
      type: 'Non-Fiction',
      summary: 'A book about the universe.'
    },
    {
      id: 7,
      author: 'Roald Dahl',
      title: 'Matilda',
      publicationYear: 1988,
      type: 'Fiction',
      summary: 'A children\'s story'
    },
    {
      id: 8,
      author: 'Jules Verne',
      title: 'Around the World in Eighty Days',
      publicationYear: 1873,
      type: 'Fiction',
      summary: 'A book about a trip around the world.'
    },
    {
      id: 9,
      author: 'Jules Verne',
      title: 'Journey to the Center of the Earth',
      publicationYear: 1864,
      type: 'Fiction',
      summary: 'A book about a trip to the center of the earth.'
    },
    {
      id: 10,
      author: 'Douglass Adams',
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      publicationYear: 1979,
      type: 'Fiction',
      summary: 'A book about a trip through the galaxy.'
    },
    {
      id: 11,
      author: 'Steve Jones',
      title: 'Darwin\'s Ghost',
      publicationYear: 2000,
      type: 'Non-Fiction',
      summary: 'A book about evolution.'
    },
    {
      id: 12,
      author: 'Steve Jones',
      title: 'Almost Like a Whale',
      publicationYear: 1999,
      type: 'Non-Fiction',
      summary: 'A book about evolution.'
    }
  ];

  getBooks(): Book[] { // this method returns an array of books
    return this.bookList; // the books array is returned
  }
  
  // Add other methods like addBook, deleteBook, etc. as needed

  readonly sampleBook: Book = { // provide a default value when the property is declared
    id: 13,
    author: 'Hilary Mantel',
    title: 'Wolf Hall',
    publicationYear: 2009,
    type: 'Fiction',
    summary: 'A book about Thomas Cromwell.'
  }

  getSampleBook(): Book { // this method returns a single book
    return this.sampleBook;
  }
}