import { Component, OnInit } from '@angular/core';
import {products} from '../products'
import {ActivatedRoute}   from '@angular/router'
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
   product;

// ActivatedRoute url ile tasinan bilgileri component iletir. Component constructor uzerinden inject edilmeli.
  constructor(private route: ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      x=> {
        this.product=products[x.get('productId')];
      }

    );
  }

}