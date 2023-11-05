import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-crud-4';
  bookUpdatedEvent = new EventEmitter<void>(); // this is the event that will be emitted when a book is updated
}
