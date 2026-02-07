import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './common/nav/nav.component';
import { BooksComponent } from './page/books/books.component';
import { BorrowersComponent } from './page/borrowers/borrowers.component';
import { HomeComponent } from './page/home/home.component';
import { EntryLayoutComponent } from './HomeLayout/entry-layout/entry-layout.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, BooksComponent, BorrowersComponent, HomeComponent, EntryLayoutComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'library-management-frontend';
}
