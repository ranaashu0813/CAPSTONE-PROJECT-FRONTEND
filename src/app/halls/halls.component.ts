import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-halls',
  templateUrl: './halls.component.html',
  styleUrls: ['./halls.component.css']
})
export class HallsComponent implements OnInit {
  halls: any[] = [];
  name = '';
  location = '';

  constructor(private api: ApiService) {}

  ngOnInit() { this.load(); }

  load() { this.api.getHalls().subscribe(d => this.halls = d); }

  add() {
    this.api.addHall({name: this.name, location: this.location}).subscribe(() => {
      this.name=''; this.location=''; this.load();
    });
  }

  delete(id: number) {
    this.api.deleteHall(id).subscribe(() => this.load());
  }
}
