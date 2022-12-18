import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  bookList: any = [];

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit() {
    this.bookService.getAllBooks().subscribe(bookList => {
      this.bookList = bookList;
      console.log(this.bookList);
    });
  }

  deleteBook(id: any) {
    this.bookService.deleteBookById(id).subscribe((result: any) => {
      if (result.success) {
        for (var index = 0; index < this.bookList.length; index++) {
          if (this.bookList[index]._id == result.id) {
            this.bookList.splice(index, 1);
          }
        }
      } else {
        alert("Book not successfully deleted");
      }
    });
  }

  editBook(id: any) {
    console.log("hellO");
    this.router.navigate(["/manage/book/add"], {
      queryParams: {
        bookId: id
      }
    });
  }

  createBook() {
    this.router.navigateByUrl('/manage/book/add');
  }

}
