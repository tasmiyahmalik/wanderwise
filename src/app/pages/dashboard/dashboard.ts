import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {

  view: string = '';

  stats = [
    { key: 'users', title: 'Total Users', value: 12 },
    { key: 'trips', title: 'Total Trips', value: 9 },
    { key: 'bookings', title: 'Bookings', value: 5 }
  ];

  users = ['Ali', 'Sara', 'John', 'Emma', 'David'];

  trips = ['Paris Trip', 'Japan Trip', 'Greece Trip', 'Maldives Trip'];

  bookings = [
    { name: 'Ali', trip: 'Paris' },
    { name: 'Sara', trip: 'Japan' },
    { name: 'John', trip: 'Maldives' }
  ];

  openView(type: string) {
    this.view = type;
  }

  back() {
    this.view = '';
  }
}