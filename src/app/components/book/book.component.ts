import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  book: any;
  bookId: any;
  addedToCart: boolean = false;

  static get parameters() {
    return [ActivatedRoute, BookService, GlobalService];
  }

  constructor(
    private route: ActivatedRoute, 
    private bookService: BookService, 
    private globalService: GlobalService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.addedToCart = false;
    this.route.params.subscribe(params => {
      this.bookId = params["id"];
      this.bookService.getBookById(this.bookId).subscribe(book => {
        this.book = book;
        console.log(book);
      });
    });
  }

  addToCart() {
    this.globalService.addToCart(this.book);
    this.addedToCart = true;
  }

  moveToCart() {
    this.router.navigate(['/home/cart']);
  }

}
