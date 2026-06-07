import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TripService {
  private apiUrl = 'http://localhost:5000/api/trips';

  constructor(private http: HttpClient) {}

  getTrips(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getTripById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createTrip(trip: any): Observable<any> {
    return this.http.post(this.apiUrl, trip);
  }

  updateTrip(id: number, trip: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, trip);
  }

  deleteTrip(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}