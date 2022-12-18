import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: any = [];

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.getAllOrders().subscribe(response => {
      this.orders = response;
      console.log(this.orders);
    });
  }

}
