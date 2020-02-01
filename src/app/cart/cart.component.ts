import { Component, OnInit } from '@angular/core';
import {CartServicesService} from '../cart-services.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  constructor(private cart:CartServicesService) { }

  ngOnInit() {
   this. items=this.cart.getItems();
  }

}