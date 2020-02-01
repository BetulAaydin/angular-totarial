import { Component, OnInit } from '@angular/core';
import {products} from '../products'
import {ActivatedRoute}   from '@angular/router'
import { CartServicesService } from '../cart-services.service';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   product;

// ActivatedRoute url ile tasinan bilgileri component iletir. Component constructor uzerinden inject edilmeli.
  constructor(private route: ActivatedRoute,private  cartService:CartServicesService) { 

  }
 addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }


  ngOnInit() {
    this.route.paramMap.subscribe(
      x=> {
        this.product=products[x.get('productId')];
      }

    );
  }

}