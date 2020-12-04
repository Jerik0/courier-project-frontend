import {Component, OnInit} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Courier} from './models/Courier';
import {Customer} from './models/Customer';
import {Delivery} from './models/Delivery';
import {Support} from './models/Support';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'courier-project-frontend';
  baseUrl = 'http://34.68.247.1';
  registerUrl = `${this.baseUrl}/api/v1/auth/register`;
  couriersUrl = `${this.baseUrl}/api/v1/couriers`;
  customersUrl = `${this.baseUrl}/api/v1/customers`;
  deliveriesUrl = `${this.baseUrl}/api/v1/deliveries`;
  supportUrl = `${this.baseUrl}/api/v1/support`;
  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  usersData = [];
  userIds;
  billsData = [];
  userType;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

    // POST USER REGISTRATION
    // this.http.get(this.registerUrl, this.options).subscribe(
    //   data => console.log(data),
    //   error => console.log(error.status)
    // );

    this.getCouriers();

    this.getCustomers();

    this.getDeliveries();

    this.getSupportData();
  }

  // ****************************  GET REQUESTS  ****************************

  getCouriers(): Array<Courier> {
    const couriers = [];
    this.http.get(this.couriersUrl, this.options).subscribe(
      data => {
        console.log('**************');
        console.log('courier data');
        console.log(data);
        console.log('**************');
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            couriers.push(data[key]);
          }
        }
      },
      error => console.log(error.status)
    );
    return couriers;
  }

  getCustomers(): Array<Customer> {
    const customers = [];
    this.http.get(this.customersUrl, this.options).subscribe(
      data => {
        console.log('**************');
        console.log('customer data');
        console.log(data);
        console.log('**************');
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            customers.push(data[key]);
          }
        }
      },
      error => console.log(error.status)
    );
    return customers;
  }

  getDeliveries(): Array<Delivery> {
    const deliveries = [];
    this.http.get(this.deliveriesUrl, this.options).subscribe(
      data => {
        console.log('**************');
        console.log('delivery data');
        console.log(data);
        console.log('**************');
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            deliveries.push(data[key]);
          }
        }
      },
      error => console.log(error.status)
    );
    return deliveries;
  }

  getSupportData(): Array<Support> {
    const supportDataArray = [];
    this.http.get(this.supportUrl, this.options).subscribe(
      data => {
        console.log('**************');
        console.log('support data');
        console.log(data);
        console.log('**************');
        for (const key in data) {
          if (data.hasOwnProperty(key)) {
            supportDataArray.push(data[key]);
          }
        }
      },
      error => console.log(error.status)
    );
    return supportDataArray;
  }

  // *************************************************************************
  // ********************************  POSTS  ********************************

  postCourier(): void {
    // this.http.post(this.couriersUrl)
  }

  postCustomer(): void {

  }

  postDelivery(): void {

  }

  postSupport(): void {

  }
}
