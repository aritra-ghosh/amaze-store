import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  apiUrl: string;

  constructor(private http: HttpClient) {
    this.apiUrl = environment.URL;
  }

  getAllBooks() {
    let searchUrl = this.apiUrl + "books";
    return this.http.get(searchUrl);
  }

  getBookById(id: any) {
    let searchUrl = this.apiUrl + "book?bookId=" + id;
    return this.http.get(searchUrl);
  }

  deleteBookById(id: any) {
    let searchUrl = this.apiUrl + "book?bookId=" + id;
    console.log(id);
    return this.http.delete(searchUrl);
  }

  addBook(bookData: any) {
    let searchUrl = this.apiUrl + "book";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post(searchUrl, JSON.stringify({ bookData: bookData }), httpOptions);
  }

  updateBook(bookData: any) {
    let searchUrl = this.apiUrl + "book";
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.put(searchUrl, JSON.stringify({ bookData: bookData }), httpOptions);
  }
}
