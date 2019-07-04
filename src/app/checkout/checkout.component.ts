import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  items;
  checkOutForm;
  success;
  constructor(private cartService: CartService, private route: ActivatedRoute, private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems();
    this.checkOutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
  }

  onSubmit(customerData) {
    console.warn('Your order has been submitted', customerData);
    this.cartService.clearCart();
    this.checkOutForm.reset();
    this.success = true;
  }

  ngOnInit() {
  }

}
