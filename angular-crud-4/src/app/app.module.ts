import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // import the HttpClientModule from @angular/common/http
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ListBooksComponent } from './list-books/list-books.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';

@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    UpdateBookComponent,
    ListBooksComponent,
    DeleteBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // add the HttpClientModule to the imports array
    AppRoutingModule,
    FormsModule // add the FormsModule to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
