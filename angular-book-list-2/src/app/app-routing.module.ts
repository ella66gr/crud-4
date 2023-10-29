import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBooksComponent } from './book/edit-books/edit-books.component';
import { ViewBooksComponent } from './book/view-books/view-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/view-books', pathMatch: 'full' },
  { path: 'view-books', component: ViewBooksComponent },
  { path: 'edit-books', component: EditBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
