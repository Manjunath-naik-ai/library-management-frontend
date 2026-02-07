import { Routes } from '@angular/router';
import { BooksComponent } from './page/books/books.component';
import { BorrowersComponent } from './page/borrowers/borrowers.component';
import { LoginComponent } from './common/login/login.component';
import { SignupComponent } from './common/signup/signup.component';
import { HomeComponent } from './page/home/home.component';
import { RouterModule } from '@angular/router';
import { EntryLayoutComponent } from './HomeLayout/entry-layout/entry-layout.component';

export const routes: Routes = [
  {
    path: '', component: EntryLayoutComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'books',
    component: BooksComponent,
  },
  {
    path: 'borrowers',
    component: BorrowersComponent,
  },
];
