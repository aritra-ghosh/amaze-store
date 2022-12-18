import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
  bookList: any = [];

  static get parameters() {
    return [BookService, Router];
  }

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(bookList => {
      this.bookList = bookList;
      console.log(this.bookList);
    });
  }

  navigateToBook(book: any) {
    this.router.navigate(["home/book"], {
      queryParams: {
        book: JSON.stringify(book)
      }
    })
  }

}
