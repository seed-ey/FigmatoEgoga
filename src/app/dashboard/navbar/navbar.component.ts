import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentDate: string;

  constructor(private datePipe: DatePipe) {
    const now = new Date();
    const formattedDate = this.datePipe.transform(now, 'EEEE, MMMM d, y, h:mm:ss a');
    this.currentDate = formattedDate || '';
  }
}
