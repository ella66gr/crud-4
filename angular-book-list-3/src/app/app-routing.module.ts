import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBooksComponent } from './book/edit-books/edit-books.component';
import { ViewBooksComponent } from './book/view-books/view-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/view', pathMatch: 'full' },
  { path: 'edit', component: EditBooksComponent },
  { path: 'view', component: ViewBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
