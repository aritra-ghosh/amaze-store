import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shoppingCart: any = [];
  total: number = 0;
  ordering: boolean = false;
  orderPlaceSuccessMsg: string = '';

  get cartCount(): number {
    return this.globalService.cartItemCount;
  }

  constructor(private globalService: GlobalService, private router: Router) {
  }

  ngOnInit() {
    this.shoppingCart = this.globalService.getCart();
    console.log(this.shoppingCart);
    for (var a = 0; a < this.shoppingCart.length; a++) {
      this.total += this.shoppingCart[a].total;
    }
  }

  emptyCart() {
    this.globalService.emptyCart();
    this.shoppingCart = [];
    this.ordering = false;
  }

  addToCart(item: any) {
    this.globalService.addToCart(item.product);
    console.log(item)
  }

  removeFromCart(item: any) {
    this.globalService.removeItemFromCart(item.product);
  }

  toOrder() {
    // this.router.navigate(['/home/order']);
    this.ordering = true;
  }

  performOrderPlaceActions(event: any) {
    if (event.success) {
      this.emptyCart();
      this.orderPlaceSuccessMsg = event.msg;
    }
  }
}
