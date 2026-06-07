import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-trips',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trips.html',
  styleUrls: ['./trips.css']
})
export class Trips {

  selectedTrip: any = null;

  countries = [
    {
      name: 'Paris',
      price: '$1200',
      img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Switzerland',
      price: '$1500',
      img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Japan',
      price: '$1800',
      img: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Greece',
      price: '$1400',
      img: 'https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Germany',
      price: '$1300',
      img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Finland',
      price: '$1600',
      img: 'https://images.unsplash.com/photo-1488747279002-c8523379faaa?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Ireland',
      price: '$1400',
      img: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Maldives',
      price: '$2000',
      img: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=1200&q=80'
    },
    {
      name: 'Turkey',
      price: '$1200',
      img: 'https://images.unsplash.com/photo-1527838832700-5059252407fa?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  bookTrip(country: any) {
    this.selectedTrip = country;
  }

  payNow() {
    alert("Payment Successful! Trip Booked.");
    this.selectedTrip = null;
  }

  close() {
    this.selectedTrip = null;
  }
}