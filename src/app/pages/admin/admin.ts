import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css']
})
export class Admin {

  view: string = '';

  users = [
    { name: 'Ali', email: 'ali@gmail.com' },
    { name: 'Sara', email: 'sara@gmail.com' },
    { name: 'John', email: 'john@gmail.com' },
    { name: 'Emma', email: 'emma@gmail.com' }
  ];

  trips = [
    { country: 'Paris', bookings: 5 },
    { country: 'Japan', bookings: 3 },
    { country: 'Maldives', bookings: 7 }
  ];

  logs = [
    'User Ali booked Paris trip',
    'User Sara booked Japan trip',
    'New user Emma registered',
    'Payment received for Maldives trip'
  ];

  open(type: string) {
    this.view = type;
  }

  back() {
    this.view = '';
  }
}