import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookComponent } from './components/book/book.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { FooterAdminComponent } from './components/footer-admin/footer-admin.component';
import { HomeComponent } from './components/home/home.component';
import { ManageComponent } from './components/manage/manage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { OrderCreateComponent } from './components/order-create/order-create.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    AddBookComponent,
    BookComponent,
    BooklistComponent,
    BooksComponent,
    CartComponent,
    FooterComponent,
    FooterAdminComponent,
    HomeComponent,
    ManageComponent,
    NavbarComponent,
    NavbarAdminComponent,
    AdminLoginComponent,
    OrderCreateComponent,
    OrderListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
