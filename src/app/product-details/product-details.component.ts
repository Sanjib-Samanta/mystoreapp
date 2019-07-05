import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
//import { products } from '../products';

import { CartService} from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  products;
  product;
  addToCart(product) {
        window.alert('Your product has been added to the cart!');
        this.cartService.addToCart(product);
  }
  constructor( private route: ActivatedRoute,
               private httpService: HttpClient,
               private cartService: CartService
  ) {
  }

  ngOnInit() {
    this.httpService.get('http://localhost:59802/api/product').subscribe(
      data => {
        this.products = data;
        this.route.paramMap.subscribe(params => {
          this.product = this.products[+params.get('productId')];
        });
      });
  }
}
