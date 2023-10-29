// book model
export interface Book { // the Book interface
  id: number;
  author: string;
  title: string;
  publicationYear: number;
  type: 'Fiction' | 'Non-Fiction';
  summary: string;
}