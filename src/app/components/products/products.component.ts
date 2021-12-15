import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductServiceService } from '../shared/product-service.service';
import { render } from 'creditcardpayments/creditCardPayments';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  @ViewChild('paypalRef', { static: true }) private paypalRef: ElementRef | any;
  @ViewChild('paypalRef', { static: true }) private paypalRef2:
    | ElementRef
    | any;

  productdata: any = [];
  product1: any = [];
  product2: any = [];
  ngOnInit(): void {
    window.paypal
      .Buttons({
        style: {
          // layout: 'horizontal',
          // color: 'blue',
          shape: 'rect',
          label: 'paypal',
        },
        createOrder: (detail: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '9.99',
                  currency_code: 'USD',
                },
              },
            ],
          });
        },
        onApprove: (detail: any, actions: any) => {
          return actions.order.capture().then((details: any) => {
            alert('Transaction Completed');
          });
        },
        onError: (error: any) => {
          console.log(error);
        },
      })
      .render(this.paypalRef.nativeElement);
  }

  constructor(public products: ProductServiceService) {
    this.products.getData().subscribe((data: any) => {
      this.productdata = data;
      console.warn(data);
      function getDimensionsByFilter(_id: any) {
        return data.filter((x: any) => x._id === _id);
      }
      var test = getDimensionsByFilter(1);
      var test2 = getDimensionsByFilter(2);
      this.product1 = test;
      this.product2 = test2;
      console.log(this.product1);
      console.log(this.product2);
    });

    // this.products.getproduct().subscribe((data: any) => {
    //   console.warn(data);
    //   this.data = data;
    //   data.category;
    // });
    render({
      id: '#myPaypalButtons',
      value: '5.99',
      currency: 'USD',
      onApprove: (details: any) => {
        alert('Transaction Successfull');
      },
    });
  }
}
