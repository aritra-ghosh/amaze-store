import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { ManageComponent } from './components/manage/manage.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { AboutComponent } from './components/about/about.component';
import { CartComponent } from './components/cart/cart.component';
import { BookComponent } from './components/book/book.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { OrderListComponent } from './components/order-list/order-list.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: "home"
  },
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },
  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: '',
        component: BooklistComponent,
      },
      {
        path: 'book/:id',
        component: BookComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'order',
        component: OrderCreateComponent
      }
    ]
  },
  {
    path: "manage",
    component: ManageComponent,
    children: [
      {
        path: '',
        component: BooksComponent
      },
      {
        path: 'book/add',
        component: AddBookComponent
      },
      {
        path: 'book/add/:bookId',
        component: AddBookComponent
      },
      {
        path: 'orders',
        component: OrderListComponent
      }
    ],
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [CommonModule, RouterModule]
})
export class AppRoutingModule { }
