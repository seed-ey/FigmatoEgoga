import { Component, TemplateRef, Input, OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DealTermModalData } from '../deal-terms/modal-data';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { BondserviceService } from '../bondservice.service';

@Component({
  selector: 'app-deal-terms',
  templateUrl: './deal-terms.component.html',
  styleUrls: ['./deal-terms.component.css'],
})
export class DealTermsComponent implements OnInit {
  @Input() bondShow = {
    listItem1: true,
    listItem2: false,
    listItem3: false,
    listItem4: false,
  };
  @Input() value: any;
  @Input() editFlag = false;
  public modalForm!: FormGroup;

  bsModalRef!: BsModalRef;
  activeButton: string | null = null;
  modalDataArray: DealTermModalData[] = [];
  editedUser: any;
  selectedUser: any;

  modalData: DealTermModalData = {
    dealType: '',
    commonReference: '',
    counterParty: '',
    direction: '',
    tradeDate: '',
    startDate: '',
    quantity: 0,
    nominal: '',
    amount: '',
    cleanPrice: 0,
    dirtyPrice: '',
    currentYield: '',
    price: '',
    consideration: '',
    tradingBook: '',
    investmentType: '',
    processAction: '',

    boughtAtDiscPrem: '',
    discountPremium: '',
    interestBoughtSold: '',
    interestBoughtSoldAdj: '',
    interestAccrued: '',
    interestAccruedAdj: '',
    discPremAmortized: 0,
    discPremUnamortized: '',
    dailyInterestAmount: '',
    dailyAmortizationAmount: 0,

    bondIssuer: '',
    maturityDate: '',
    tenor: '',
    dayCountBasis: '',
    couponRate: '',
    lastCouponDate: '',
    nextCouponDate: 0,
    nextCouponAmount: '',
    daysInCurrentAccrual: '',

    dealStatus: '',
    counterPartyReference: '',
    dealingoMethod: '',
    deliveryType: '',
    broker: '',
    brokerCommission: '',
    brokerReference: '',
    portfolio: '',
    dealNote: '',
    confirmationRequired: '',
    dealer: '',
  };
  constructor(
    private modalService: BsModalService,
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private service: BondserviceService
  ) {
    // this.modalForm = this.formBuilder.group({
    // dealType: [''],
    // commonReference: [''],
    // counterParty: [''],
    // direction: [''],
    // tradeDate: [''],
    // startDate: [''],
    // quantity: [0],
    // nominal: [''],
    // amount: [''],
    // cleanPrice: [0],
    // dirtyPrice: [''],
    // currentYield: [''],
    // price: [''],
    // consideration: [''],
    // tradingBook: [''],
    // investmentType: [''],
    // processAction: [''],
    // boughtAtDiscPrem: [''],
    // discountPremium: [''],
    // interestBoughtSold: [''],
    // interestBoughtSoldAdj: [''],
    // interestAccrued: [''],
    // interestAccruedAdj: [''],
    // discPremAmortized: [0],
    // discPremUnamortized: [''],
    // dailyInterestAmount: [''],
    // dailyAmortizationAmount: [0],
    // bondIssuer: [''],
    // maturityDate: [''],
    // tenor: [''],
    // dayCountBasis: [''],
    // couponRate: [''],
    // lastCouponDate: [''],
    // nextCouponDate: [0],
    // nextCouponAmount: [''],
    // daysInCurrentAccrual: [''],
    // dealStatus: [''],
    // counterPartyReference: [''],
    // dealingoMethod: [''],
    // deliveryType: [''],
    // broker: [''],
    // brokerCommission: [''],
    // brokerReference: [''],
    // portfolio: [''],
    // dealNote: [''],
    // confirmationRequired: [''],
    // dealer: [''],
    // });
  }

  openModal(template: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(template);
    console.log(this.modalDataArray);
  }

  closeModal() {
    this.bsModalRef.hide();
  }
  setActiveButton(buttonId: string) {
    this.activeButton = buttonId;
  }

  onSubmit() {
    const seed = this.modalData;
    this.service.updateData(seed).subscribe((result) => {
      this.modalData = result;
      console.log(result);
      this.modalService.hide();
      this.router.navigate(['table']);
    });
  }
  dealTerms: boolean = true;
  impliedTerms: boolean = false;
  securityDetails: boolean = false;
  ancilliaryService: boolean = false;
  setDataForButton(buttonId: string) {
    if (buttonId === 'button1') {
      this.activeButton = buttonId;
      this.dealTerms = true;
      this.impliedTerms = false;
      this.securityDetails = false;
      this.ancilliaryService = false;
    } else if (buttonId === 'button2') {
      this.activeButton = buttonId;
      this.impliedTerms = true;
      this.dealTerms = false;
      this.securityDetails = false;
      this.ancilliaryService = false;
    } else if (buttonId === 'button3') {
      this.activeButton = buttonId;
      this.securityDetails = true;
      this.impliedTerms = false;
      this.dealTerms = false;
      this.ancilliaryService = false;
    } else if (buttonId === 'button4') {
      this.activeButton = buttonId;
      this.ancilliaryService = true;
      this.securityDetails = false;
      this.impliedTerms = false;
      this.dealTerms = false;
    }
  }

  ngOnInit(): void {
    console.log('value qqq', this.value);
    this.activeButton = 'button1';
    console.log('me i', this.editFlag);

    if ((this.value = this.value)) {
      this.modalData = this.value;
    }
    this.route.queryParams.subscribe((queryParams) => {
      this.editedUser = queryParams['editedUser'];
      if (this.editedUser) {
        console.log("this.editedUser --",this.editedUser );
        this.selectedUser = JSON.parse(this.editedUser);
        console.log("this.selectedUser --",this.selectedUser );
      }
    });
  }
  buttonFunc() {
    if (this.editedUser) {
      console.log('idea', this.editedUser);
      this.editUser();
    } else {
      this.onSubmit();
    }
  }

  editUser() {
    console.log("new value  :",this.modalData);
    this.service.saveEdit(this.selectedUser.id, this.modalData).subscribe(
      (response) => {
        this.modalService.hide();
        this.router.navigate(['table']);
      },
      (error) => {
        alert('something went wrong');
      }
    );
  }
}
