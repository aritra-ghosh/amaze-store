import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  shoppingCart: any = [];
  cartView: any = [];
  apiUrl: string;

  get cartItemCount(): number {
    let count = 0;
    if (sessionStorage && sessionStorage.getItem('cartCount')) {
      count = Number(sessionStorage.getItem('cartCount'));
    }
    return count;
  }

  constructor(private http: HttpClient) {
    this.apiUrl = environment.URL;
  }

  getCart() {
    return this.shoppingCart;
  }

  addToCart(item: any) {
    if (this.shoppingCart.length == 0) {
      this.prependItemToCart(item);
    } else {
      let itemExists = this.checkItemExists(item);
      if (itemExists) {
        for (var a = 0; a < this.shoppingCart.length; a++) {
          if (this.shoppingCart[a].product.title == item.title) {
            this.shoppingCart[a].quantity += 1;
            this.shoppingCart[a].total += item.price;
          }
        }
      } else {
        this.prependItemToCart(item);
      }
    }
    sessionStorage.setItem('cartCount', this.shoppingCart.length);
  }

  checkItemExists(item: any) {
    let exist = false;
    for (var a = 0; a < this.shoppingCart.length; a++) {
      if (this.shoppingCart[a].product.title == item.title) {
        exist = true;
        break;
      } else {
        exist = false;
      }
    }
    return exist;
  }

  prependItemToCart(item: any) {
    let newItem = {
      product: item,
      quantity: 1,
      total: item.price
    }

    this.shoppingCart.unshift(newItem);
  }

  removeItemFromCart(item: any) {
    if (this.shoppingCart.length > 0) {
      for (var index = 0; index < this.shoppingCart.length; index++) {
        let cartItem = this.shoppingCart[index];
        if (cartItem.product.title == item.title) {
          if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
            cartItem.total -= item.prce;
          } else {
            this.shoppingCart.splice(index, 1);
          }
        }
      }
      if (this.shoppingCart.length === 0) {
        sessionStorage.removeItem('cartCount');
      }
    }
  }

  emptyCart() {
    this.shoppingCart = [];
    sessionStorage.removeItem('cartCount');
  }

  placeOrder(orderData: any) {
    let Url = this.apiUrl + "create-order";
    return this.http.post(Url, orderData);
  }

  getAllOrders() {
    let Url = this.apiUrl + "orders";
    return this.http.get(Url);
  }
}
