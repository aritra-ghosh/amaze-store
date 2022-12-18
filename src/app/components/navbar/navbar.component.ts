import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  get cartItemCount(): number {
    return this.globalService.cartItemCount;
  }

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

}
