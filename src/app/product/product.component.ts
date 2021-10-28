import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) {}

  id: number;
  productDetails: Product;
  finalPrice: number;
  ngOnInit(): void {
    this.id = +this.route.snapshot.queryParamMap.get('id');
    // this.productDetails = this.productService.getProductById(this.id);
    this.finalPrice =
      this.productDetails.price -
      0.01 * this.productDetails.discountPercent * this.productDetails.price;
  }

  addToCart(): void {
    // const item: CartItem = {
    //   id: undefined,
    //   product: this.productDetails,
    //   quantity: 1,
    //   isSaved: false,
    // };
    // this.cartService.addToCart(item);
    // this.router.navigate(['cart']);
  }
}
