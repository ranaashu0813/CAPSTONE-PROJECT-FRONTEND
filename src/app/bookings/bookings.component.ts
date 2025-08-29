import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
   styleUrls : ['./bookings.component.css']
})
export class BookingsComponent implements OnInit {
  bookings: any[] = [];
  username = '';
  hallName = '';

  constructor(private api: ApiService) {}

  ngOnInit() { this.load(); }

  load() { this.api.getBookings().subscribe(d => this.bookings = d); }

  add() {
    this.api.addBooking({username: this.username, hallName: this.hallName}).subscribe(() => {
      this.username=''; this.hallName=''; this.load();
    });
  }

  delete(id: number) {
    this.api.deleteBooking(id).subscribe(() => this.load());
  }
}
