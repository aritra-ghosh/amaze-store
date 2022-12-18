import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  @Output() onOrderPlacingSuccess = new EventEmitter();
  useName: string = '';
  userEmail: string = '';
  userPhone: string = '';
  billingAddress: string = '';
  billingPincode: string = '';

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
  }

  createOrder() {
    const cartItems = this.globalService.shoppingCart;
    const orderData = {
      useName: this.useName,
      userEmail: this.userEmail,
      userPhone: this.userPhone,
      billingAddress: this.billingAddress,
      billingPincode: this.billingPincode,
      items: cartItems
    };

    this.globalService.placeOrder(orderData).subscribe((response: any) => {
      console.log(response);
      if (response && response.success) {
        this.onOrderPlacingSuccess.emit({
          msg: response.message,
          success: true
        });
      }
    }, err => {
      console.log(err);
    });
  }

}
