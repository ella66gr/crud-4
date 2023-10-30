import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditBooksComponent } from './edit-books/edit-books.component';
import { ViewBooksComponent } from './view-books/view-books.component';

const routes: Routes = [
  { path: '', redirectTo: '/page-1', pathMatch: 'full' },
  { path: 'edit', component: EditBooksComponent },
  { path: 'view', component: ViewBooksComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
