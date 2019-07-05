import { Component, OnInit } from '@angular/core';

//import { products } from '../products';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  //products = products;
  products;
  constructor(private httpService: HttpClient)  {}

  ngOnInit() {
    this.httpService.get('http://localhost:59802/api/product').subscribe(
      data => {
        this.products = data;
      });

  }
  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
