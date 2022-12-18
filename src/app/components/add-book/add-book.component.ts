import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  title: string = '';
	author: string = '';
	publisher: string = '';
	price: string = '';
	category: string = '';
	description: string = '';
	cover: string = '';
  id: string = '';

  editMode: boolean = false;

	static get parameters() {
		return [BookService, ActivatedRoute, Router];
	}

	constructor(
    private bookService: BookService, 
    private route: ActivatedRoute, 
    private router: Router
  ) {
	}

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if(params["bookId"]) {
        let bookId = params["bookId"];
        this.editMode = true;
        console.log(this.editMode);
        this.bookService.getBookById(bookId).subscribe((book: any) => {
          this.id = book._id;
          this.title = book.title;
          this.author = book.author;
          this.publisher = book.publisher;
          this.price = book.price;
          this.category = book.category;
          this.description = book.description;
          this.cover = book.cover;
        });
      }
    });
  }

  addBook() {
    if(this.editMode) {
      let bookData = {
        id: this.id,
        title: this.title,
        author: this.author,
        publisher: this.publisher,
        price: this.price,
        category: this.category,
        description: this.description,
        cover:this.cover
      }

      this.bookService.updateBook(bookData).subscribe((result: any) => {
        if(result.success) {
          alert(result.message);
          this.router.navigate(["/manage/books"]);
        }
      });
    } else {
      let bookData = {
        title: this.title,
        author: this.author,
        publisher: this.publisher,
        price: this.price,
        category: this.category,
        description: this.description,
        cover:this.cover
      }

      this.bookService.addBook(bookData).subscribe((res: any) => {
        if(res.success) {
          alert(res.message);
          this.router.navigate(["/manage/books"]);
        } else {
          alert(res.message);
        }
      });
    }
  }

  navigateToList() {
    this.router.navigateByUrl('/manage');
  }

}
