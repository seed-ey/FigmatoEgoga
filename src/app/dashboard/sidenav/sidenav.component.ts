import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DealTermModalData } from 'src/app/deal-terms/modal-data';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  currentDate: string;
  isDropdownVisible = false;
  activeButton: string | null = null;


  toggleDropdown(type: string):void {
    if (type === 'menu' || type === 'section') {
      this.isDropdownVisible = !this.isDropdownVisible;
    }
  }
   setActiveButton(buttonId: string) {
    this.activeButton = buttonId;
  }
  receiveDataFromChild(data: DealTermModalData) {
    console.log('Received data from child:', data);
  }
  constructor(private datePipe: DatePipe) {
    const now = new Date();
    const formattedDate = this.datePipe.transform(now, 'EEEE, MMMM d, y, h:mm:ss a');
    this.currentDate = formattedDate || '';
  }

  ngOnInit() {
    this.isDropdownVisible = true;
  }
 
  
}
