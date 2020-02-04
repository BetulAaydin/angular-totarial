import { Component, OnInit } from '@angular/core';
import { CartServicesService } from '../cart-services.service';
@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {
 shippingCosts;
  constructor(  private cartService: CartServicesService) { }

  ngOnInit() {
    this.shippingCosts = this.cartService.getShippingPrices();
  }

}