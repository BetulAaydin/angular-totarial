import { Component, OnInit } from '@angular/core';
import {CartServicesService} from '../cart-services.service'
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(private cart:CartServicesService,  private formBuilder: FormBuilder) { 
  this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });

  }

  ngOnInit() {
   this. items=this.cart.getItems();
  }
 onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.items = this.cart.clearCart();
    this.checkoutForm.reset();
  }
}