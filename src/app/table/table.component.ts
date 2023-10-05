import { Component, OnInit, TemplateRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DealTermModalData } from '../deal-terms/modal-data';
import { BondserviceService } from '../bondservice.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  modalDataArray: DealTermModalData[] = [];
  bsModalRef!: BsModalRef;
  isEditing = false;
  currentPage: number = 1;
  changePage(page:  number): void{
    this.currentPage = page
  } 

  constructor(
    private http: HttpClient,
    private modalService: BsModalService,
    private service: BondserviceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  // user: any;

  modelData: any[] = [];

  headache = [
    { title: 'DEALTYPE' },
    { title: 'COMMONREFERENCE' },
    { title: 'COUNTERPARTY' },
    { title: 'DIRECTION' },
    { title: 'TRADEDATE' },
    { title: 'STARTDATE' },
    { title: 'QUANTITY' },
    { title: 'NOMINAL' },
    { title: 'AMOUNT' },
    { title: 'CLEANPRICE' },
    { title: 'DIRTYPRICE' },
    { title: 'CURRENTYIELD' },
    { title: 'PRICE' },
    { title: 'CONSIDERATION' },
    { title: 'TRADINGBOOK' },
    { title: 'INVESTMENTTYPE' },
    { title: 'PROCESSACTION' },
    { title: 'BOUGHTATDISCPREM' },
    { title: 'DISCOUNTPREMIUM' },
    { title: 'INTERESTBOUGHTSOLD' },
    { title: 'INTERESTBOUGHTSOLDADJ' },
    { title: 'INTERESTACCRUED' },
    { title: 'INTERESTACCRUEDADJ' },
    { title: 'DISCPREAMORTIZED' },
    { title: 'DISCPREUNAMORTIZED' },
    { title: 'DAILYINTERESTAMOUNT' },
    { title: 'DAILYAMORTIZATIONAMOUNT' },
    { title: 'BONDISSUER' },
    { title: 'MATURITYDATE' },
    { title: 'TENOR' },
    { title: 'DAYCOUNTBASIS' },
    { title: 'COUPONRATE' },
    { title: 'LASTCOUPONDATE' },
    { title: 'NEXTCOUPONDATE' },
    { title: 'NEXTCOUPONAMOUNT' },
    { title: 'DAYSINCURRENTACCRUAL' },
    { title: 'DEALSTATUS' },
    { title: 'COUNTERPARTYREFERENCE' },
    { title: 'DEALINGOMETHOD' },
    { title: 'DELIVERYTYPE' },
    { title: 'BROKER' },
    { title: 'BROKERCOMMISSION' },
    { title: 'BROKERREFERENCE' },
    { title: 'PORTFOLIO' },
    { title: 'DEALNOTE' },
    { title: 'CONFIRMATIONREQUIRED' },
    { title: 'DEALER' },
  ];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.service.getModalData().subscribe((result) => {
      this.modelData = result;
      console.log(result);
    });
  }

  showActionsMenu(index: number) {
    console.log('Ellipsis icon clicked for row ' + index);
    this.openModal;
  }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
    console.log(this.modalDataArray);
  }

  editUser(data: any) {
   // this.isEditing = true;
    console.log('this record has been editted:', data);
    this.router.navigate(['/body'], {
      queryParams: { editedUser: JSON.stringify(data) },
    });
  }

  deleteFunc(id: number) {
    this.service.deleteUser(id).subscribe(
      () => {
        console.log('User deleted successfully');
        this.modelData = this.modelData.filter((user) => user.id !== id);
        console.log('Updated modelData:', this.modelData);
        this.fetchData();
      },
      (error) => {
        console.error('Error deleting user:', error);
      }
    );
  }
}
