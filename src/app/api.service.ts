import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  baseUrl = 'http://localhost:8088'; // CORS-enabled backend

  constructor(private http: HttpClient) {}

  // Users
  register(user: any): Observable<any> { return this.http.post(this.baseUrl + '/users/register', user); }
  login(user: any): Observable<any> { return this.http.post(this.baseUrl + '/users/login', user, { responseType: 'text' }); }

  // Halls
  getHalls(): Observable<any> { return this.http.get(this.baseUrl + '/halls'); }
  addHall(hall: any): Observable<any> { return this.http.post(this.baseUrl + '/halls', hall); }
  deleteHall(id: number): Observable<any> { return this.http.delete(this.baseUrl + '/halls/' + id); }

  // Bookings
  getBookings(): Observable<any> { return this.http.get(this.baseUrl + '/bookings'); }
  addBooking(b: any): Observable<any> { return this.http.post(this.baseUrl + '/bookings', b); }
  deleteBooking(id: number): Observable<any> { return this.http.delete(this.baseUrl + '/bookings/' + id); }
}
